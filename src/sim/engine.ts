// @ts-nocheck
// Faithful port of the live harbor simulation, save codec, quests and DOM shell.
import { compressToUTF16, decompressFromUTF16 } from "lz-string";
import { scheduleIslandBeat } from "../audio/music";
import { CLOUD_KEY, SLOT_KEY, saveKey } from "../save/keys";
import { POLYFORK_CREDITS } from "../data/assets";

const __lz = { compressToUTF16, decompressFromUTF16 };
let wt = null;
export function setView(v) {
  wt = v;
}
function goodEmoji(id) {
  return (
    {
      carrot: "🥕",
      cabbage: "🥬",
      pumpkin: "🎃",
      fish: "🐟",
      smoked: "🍢",
      apple: "🍎",
      juice: "🧃",
      pie: "🥧",
      milk: "🥛",
      cheese: "🧀",
      honey: "🍯",
      candle: "🕯️",
      wheat: "🌾",
      flour: "🥣",
      bread: "🍞",
      coffee: "☕",
      cup: "☕",
      bun: "🥐",
      berry: "🫐",
      jam: "🍓",
      snow: "❄️",
      ice: "🍦",
      sorbet: "🍧",
      coconut: "🥥",
      cocktail: "🍹",
      cotton: "🍭",
      ticket: "🎟️",
      starfruit: "⭐",
      mooncake: "🍰",
      tea: "🍵",
    }[id] || "✨"
  );
}
function creditsHtml(lang) {
  const note =
    lang === "ru"
      ? "Низкополигональные пропы Polyfork (polyfork.dev) — лицензия CC BY 4.0 или Polyfork без обязательной атрибуции. Коммерческое использование разрешено; файлы не перепродаются как набор ассетов. Персонажи, касса и грядки нарисованы для Енотовой Гавани."
      : "Low-poly props from Polyfork (polyfork.dev) are CC BY 4.0 or Polyfork no-attribution. Commercial use is allowed; the files are not resold as an asset pack. Characters, the till and the beds were made for Raccoon Harbor.";
  const title = lang === "ru" ? "Авторы моделей" : "Model credits";
  const items = POLYFORK_CREDITS.map(
    ([name, id]) => `<li>${name} <span class="muted">${id}</span></li>`,
  ).join("");
  return `<h3>${title}</h3><p class="body">${note}</p><ul class="credits">${items}</ul>`;
}

var S = {
    P0: 2,
    priceIsland: 1.9,
    priceStation: 0.35,
    t0: 2.5,
    tDecay: 0.93,
    tCapLevel: 25,
    stackBase: 4,
    stackPerLevel: 2,
    stackMax: 20,
    B0: 50,
    buildIsland: 2.1,
    buildStation: 1.6,
    upgradeFactor: 0.25,
    upgradeGrowth: 1.17,
    maxLevel: 25,
    idleFactor: 0.6,
    offlineFactor: 0.5,
    offlineCapBase: 7200,
    hireBase: 120,
    hireIsland: 2.1,
    hireIndex: 2.4,
    lambdaBase: 0.4,
    lambdaPerStall: 0.08,
    lambdaPerDecor: 0.05,
    lighthouseBase: 25,
    lighthouseGrowth: 1.25,
    lighthouseNodes: 40,
    helperLevelBase: 10,
    helperLevelGrowth: 1.5,
    boatFactor: 3,
    decorBase: 40,
    decorGrowth: 1.45,
    tutorialLambda: 2,
    tutorialWindow: 150,
    pickupInterval: 0.16,
    dropInterval: 0.14,
    playerSpeed: 8.1,
    customerSpeed: 3.35,
    serviceBase: 0.58,
    magnetRadius: 4.2,
    magnetDelay: 0.32,
    zoneRadius: 1.48,
    queueCap: 16,
    stallMaxBase: 8,
    stockMaxBase: 8,
    chestPeriod: 480,
    chestIncomeSeconds: 180,
    turboSeconds: 300,
    turboShellCost: 20,
    internSeconds: 600,
    freeInternPeriod: 7200,
    internAdCooldown: 900,
    turboAdCooldown: 300,
    happyHours: [12, 19],
    festivalHours: 72,
    passLevels: 30,
    passOverflowXp: 500,
    starTokensToUnlock: 20,
    rocketPerDay: 2,
    wheelAdPerDay: 3,
    expeditionSkipPerDay: 3,
    minigameExtraPerDay: 3,
    questRerollShells: 10,
    eventTicketToShells: 10,
    collectionBonus: 0.04,
    prestigeBonus: 0.5,
    festivalIncome: 1.25,
    helperIncomeLevel: 0.08,
    carrierInterval: 0.72,
    attractionPeriod: 3.2,
    deliveryBatch: 8,
    deliverySeconds: 22,
    deliveryBonus: 1.8,
    timerIsland: 7,
    shellSkipSeconds: 45,
    vipDuration: 180,
    vipReward: 8,
    offlineCapSteps: [2, 2, 2, 3, 3, 4, 4, 6, 6, 8, 8],
    saveEvery: 15,
    simHz: 10,
  },
  ie = [`poki`, `crazy`],
  ae = class {
    buffer = [];
    track(e, t = {}) {
      let n = { event: e, params: t, t: Date.now() };
      this.buffer.push(n), this.buffer.length > 200 && this.buffer.shift();
    }
  },
  oe = class {
    ctx = null;
    master = null;
    musicGain = null;
    sfxGain = null;
    nextNote = 0;
    step = 0;
    muted = !1;
    musicOn = !0;
    sfxOn = !0;
    unlock() {
      let e = this.ensure();
      e.state === `suspended` && e.resume();
    }
    ensure() {
      if (this.ctx) return this.ctx;
      let e = new AudioContext();
      return (
        (this.ctx = e),
        (this.master = e.createGain()),
        (this.master.gain.value = 0.9),
        this.master.connect(e.destination),
        (this.musicGain = e.createGain()),
        (this.musicGain.gain.value = 0.07),
        this.musicGain.connect(this.master),
        (this.sfxGain = e.createGain()),
        (this.sfxGain.gain.value = 0.22),
        this.sfxGain.connect(this.master),
        (this.nextNote = e.currentTime + 0.1),
        e
      );
    }
    setMusic(e) {
      (this.musicOn = e),
        this.musicGain && (this.musicGain.gain.value = e ? 0.07 : 0);
    }
    setSfx(e) {
      (this.sfxOn = e),
        this.sfxGain && (this.sfxGain.gain.value = e ? 0.22 : 0);
    }
    suspendForAd(e) {
      (this.muted = e), this.master && (this.master.gain.value = e ? 0 : 0.9);
    }
    tick() {
      scheduleIslandBeat(this);
    }
    pluck(e, t, n, r) {
      if (!this.ctx || !this.musicGain) return;
      let i = this.ctx.createOscillator(),
        a = this.ctx.createGain();
      (i.type = r),
        i.frequency.setValueAtTime(t, e),
        a.gain.setValueAtTime(1e-4, e),
        a.gain.exponentialRampToValueAtTime(0.6, e + 0.02),
        a.gain.exponentialRampToValueAtTime(1e-4, e + n),
        i.connect(a),
        a.connect(this.musicGain),
        i.start(e),
        i.stop(e + n + 0.02);
    }
    tone(e, t, n, r = 0.4, i = 0) {
      if (!this.sfxOn || this.muted) return;
      let a = this.ensure();
      if (!this.sfxGain) return;
      let o = a.currentTime,
        s = a.createOscillator(),
        c = a.createGain();
      (s.type = n),
        s.frequency.setValueAtTime(e, o),
        i &&
          s.frequency.exponentialRampToValueAtTime(Math.max(40, e + i), o + t),
        c.gain.setValueAtTime(r, o),
        c.gain.exponentialRampToValueAtTime(0.001, o + t),
        s.connect(c),
        c.connect(this.sfxGain),
        s.start(o),
        s.stop(o + t + 0.02);
    }
    pop(e = 1) {
      this.tone(320 + Math.min(12, e) * 40, 0.08, `square`, 0.18, 80);
    }
    drop() {
      this.tone(220, 0.07, `triangle`, 0.16, -40);
    }
    coin() {
      this.tone(880, 0.09, `sine`, 0.2, 200);
    }
    ding() {
      this.tone(1320, 0.12, `triangle`, 0.22);
    }
    build() {
      this.tone(180, 0.18, `sawtooth`, 0.16, 220),
        this.tone(520, 0.2, `square`, 0.08);
    }
    fanfare() {
      this.tone(523, 0.12, `triangle`, 0.2),
        setTimeout(() => this.tone(659, 0.12, `triangle`, 0.2), 90),
        setTimeout(() => this.tone(784, 0.2, `triangle`, 0.22), 180);
    }
    click() {
      this.tone(640, 0.04, `square`, 0.1);
    }
    error() {
      this.tone(140, 0.14, `sawtooth`, 0.12, -40);
    }
    chest() {
      this.tone(400, 0.1, `triangle`, 0.2, 300);
    }
    splash() {
      this.tone(190, 0.16, `sine`, 0.16, -120);
      this.tone(520, 0.09, `triangle`, 0.1, 80);
    }
  },
  se = {
    ru: {
      "boot.title": `Енотова Гавань`,
      "boot.sub": `Пристань просыпается…`,
      "boot.needwebgl": `Нужен WebGL, чтобы открыть гавань.`,
      "hud.coins": `Монеты`,
      "hud.shells": `Ракушки`,
      "hud.stars": `Звёзды`,
      "nav.map": `Карта`,
      "nav.crew": `Команда`,
      "nav.island": `Остров`,
      "nav.light": `Маяк`,
      "nav.pass": `Пропуск`,
      "goal.move": `Тяни, чтобы идти`,
      "goal.pickup": `Собери {item}`,
      "goal.drop": `Выложи {item}`,
      "goal.till": `Пробей на кассе`,
      "goal.build": `Построй {name} — {cost} 🪙`,
      "goal.upgrade": `Улучши {name} до {level} — {cost} 🪙`,
      "goal.hire": `Найми помощника — {cost} 🪙`,
      "goal.chest": `Открой сундук на пристани`,
      "goal.turbo": `Турбо удвоит выручку`,
      "goal.quests": `Задания уже ждут`,
      "goal.sail": `Отплыви дальше — {cost} 🪙`,
      "goal.play": `Обслужи гостей`,
      "goal.decor": `Поставь украшение — {cost} 🪙`,
      "kind.producer": `грядка`,
      "kind.processor": `станок`,
      "kind.stall": `прилавок`,
      "kind.till": `Касса`,
      "kind.house": `Дом помощников`,
      "kind.decor": `Украшение`,
      "kind.hire": `Найм`,
      "kind.backpack": `Рюкзак`,
      "kind.delivery": `Доставка`,
      "kind.attraction": `Карусель`,
      "sheet.map": `Архипелаг`,
      "sheet.crew": `Помощники`,
      "sheet.island": `Остров`,
      "sheet.light": `Маяк`,
      "sheet.pass": `Гаванский пропуск`,
      "sheet.quests": `Задания`,
      "sheet.calendar": `Календарь`,
      "sheet.event": `Событие`,
      "sheet.ach": `Достижения`,
      "sheet.cards": `Коллекции`,
      "sheet.pause": `Пауза`,
      "sheet.profile": `Профиль`,
      "sheet.offline": `Пока тебя не было`,
      "sheet.mail": `Почтовый ящик`,
      "sheet.wheel": `Колесо удачи`,
      "sheet.chest": `Сундук`,
      "sheet.expedition": `Экспедиции`,
      "sheet.policy": `О игре`,
      "sheet.fish": `Рыбалка`,
      "sheet.vip": `Заказ VIP`,
      "sheet.league": `Лига гаваней`,
      back: `Назад`,
      close: `Закрыть`,
      claim: `Забрать`,
      "claim.x2": `Забрать ×2`,
      "no.ads": `Без рекламы`,
      later: `Позже`,
      sail: `Отплыть`,
      locked: `Закрыто`,
      "not.enough": `Пока не хватает`,
      "ad.fail": `Реклама недоступна, попробуй позже`,
      "ad.mock": `Тестовая реклама`,
      "ad.mock.sub": `На площадке здесь будет ролик`,
      turbo: `Турбо ×2`,
      "turbo.shells": `Турбо за 20 🐚`,
      "turbo.ticket": `Турбо-талон`,
      intern: `Стажёр`,
      "intern.free": `Бесплатный стажёр`,
      "intern.wait": `Стажёр через {time}`,
      mail: `Почта`,
      quests: `Задания`,
      calendar: `Календарь`,
      event: `Событие`,
      pause: `Пауза`,
      resume: `Дальше играть`,
      settings: `Настройки`,
      sound: `Звуки`,
      music: `Музыка`,
      language: `Язык`,
      quality: `Графика`,
      "quality.auto": `Авто`,
      "quality.low": `Низкая`,
      "quality.medium": `Средняя`,
      "quality.high": `Высокая`,
      daily: `Сегодня`,
      weekly: `Неделя`,
      mayor: `Заказы мэра`,
      "bonus.chest": `Сундук за все три`,
      reroll: `Другое задание`,
      "reroll.shells": `Обновить за 10 🐚`,
      ready: `Готово`,
      "stars.1": `Все станции открыты`,
      "stars.2": `Все станции 10 уровня`,
      "stars.3": `Заказ мэра выполнен`,
      prestige: `Фестиваль острова`,
      "prestige.do": `Начать фестиваль`,
      "prestige.warn": `Уровни станций станут 1. Доход острова навсегда ×{mult}.`,
      "pass.star": `Звёздная дорожка`,
      "pass.rocket": `Ракета прогресса`,
      "pass.need": `Ещё {n} жетонов`,
      "pass.overflow": `Сундук за 500 XP`,
      "wheel.free": `Бесплатное вращение`,
      "wheel.ad": `Ещё вращение`,
      "chest.open": `Открыть`,
      "chest.key": `Открыть ключом`,
      "chest.ad": `Открыть и забрать награду`,
      "offline.total": `Накопилось за {time}`,
      welcome: `С возвращением! +30 🐚 и турбо.`,
      "expedition.go": `Отправить`,
      "expedition.claim": `Забрать груз`,
      "expedition.skip": `Ускорить на час`,
      "fish.cast": `Подсечь!`,
      "fish.result": `Улов: {score}`,
      "policy.body": `Енотова Гавань — одиночная игра. Сохранение лежит на устройстве и, если площадка умеет, в её облаке. Реклама опциональна: награда только после просмотра, рядом всегда есть путь без ролика. Мы не просим личных данных.`,
      "role.cashier": `Кассир`,
      "role.carrier": `Носильщик`,
      "role.farmer": `Фермер`,
      "role.general": `Помощник`,
      "rarity.common": `Обычный`,
      "rarity.rare": `Редкий`,
      "rarity.epic": `Эпический`,
      "rarity.legendary": `Легендарный`,
      assign: `Назначить`,
      unassign: `Снять`,
      levelup: `Прокачать`,
      level: `Ур. {n}`,
      slots: `Места: {used}/{max}`,
      buy: `Купить`,
      equip: `Надеть`,
      equipped: `Надето`,
      "node.buy": `Открыть узел`,
      "hour.happy": `Счастливый час ×2`,
      "event.soon": `Следующий фестиваль через {time}`,
      "event.live": `Идёт ещё {time}`,
      join: `Участвую`,
      tickets: `Билеты`,
      rank: `Место {n}`,
      you: `Ты`,
      "card.play": `Открытка: {island}`,
      "card.sell": `Товар: {island}`,
      "card.guest": `Редкий гость: {island}`,
      "card.expedition": `Вид с моря: {island}`,
      "card.chest": `Клад: {island}`,
      "card.mayor": `Печать мэра: {island}`,
      "set.bonus": `Набор готов: +4% к доходу навсегда`,
      "quest.sell": `Продай {n} товаров`,
      "quest.sell_item": `Продай {item} ×{n}`,
      "quest.serve": `Обслужи {n} гостей`,
      "quest.upgrade": `Улучши станции {n} раз`,
      "quest.offline": `Собери офлайн-доход`,
      "quest.minigame": `Сыграй в мини-игру`,
      "quest.chest": `Открой сундуки ×{n}`,
      "quest.hire": `Найми или прокачай помощника`,
      "quest.earn": `Заработай {n} монет`,
      "quest.vip": `Выполни заказ VIP`,
      "quest.playtime": `Побудь на острове {n} мин`,
      "quest.build": `Построй станцию`,
      "quest.decor": `Поставь украшения ×{n}`,
      "quest.daily": `Выполни {n} ежедневных заданий`,
      "quest.expedition": `Отправь {n} экспедиций`,
      "quest.card": `Собери {n} открыток`,
      "chip.upgrade": `Ур. {level} · {cost}`,
      "chip.build": `{cost} 🪙`,
      "mayor.sell": `Продай {n} товаров`,
      "mayor.sell_item": `Продай {item} ×{n}`,
      "mayor.serve": `Обслужи {n} гостей`,
      "mayor.build": `Построй новую станцию`,
      "mayor.hire": `Найми помощника`,
      "mayor.upgrade": `Улучши станции {n} раз`,
      "mayor.decor": `Поставь {n} украшения`,
      "mayor.earn": `Заработай {n} монет`,
      "sail.confirm": `Потратить {cost} монет и открыть «{name}»?`,
      "sail.needstar": `Сначала звезда этого острова`,
      "timer.skip": `Пропустить стройку`,
      "timer.shells": `Ускорить за {n} 🐚`,
      "timer.left": `Строится ещё {time}`,
      "vip.need": `Принеси {item} ×{n}`,
      "vip.double": `Удвоить награду`,
      "ach.unlocked": `{name}`,
      "star.toast": `Звезда острова ×{n}!`,
      "empty.mail": `Пока пусто — острова копят, когда на них есть команда.`,
      "empty.exp": `Выбери помощника и срок: 1, 4 или 8 часов.`,
      "fish.hint": `Жми, когда рыба в зелёной зоне`,
      "legend.fish": `Легендарная рыба!`,
      "pass.level": `Уровень {n}/30`,
      "free.track": `Бесплатная`,
      "star.track": `Звёздная`,
      cosmetic: `Косметика`,
      album: `Месячный альбом`,
      day: `День {n}`,
      claimed: `Получено`,
      today: `Сегодня`,
      "profile.play": `В игре`,
      "profile.sales": `Продажи`,
      "profile.islands": `Острова`,
      rename: `Имя`,
      "league.hint": `Недельный счёт — монеты всех островов. Соседи посчитаны на этом устройстве.`,
      "build.all": `Станции`,
      "crew.none": `Карточка ещё не найдена. Сундуки и задания приносят новых.`,
      "need.slot": `Нет свободного места. Построй дом помощников.`,
      max: `Максимум`,
      on: `Вкл`,
      off: `Выкл`,
      "loading.travel": `Плывём на {name}…`,
      "first.star": `Первая звезда! Лодка ждёт.`,
      "to.boat": `К лодке`,
      "got.it": `Понятно`,
      key: `Ключ`,
      keys: `Ключи`,
      shells: `Ракушки`,
      "coins.word": `монеты`,
      "helper.new": `Новый помощник: {name}`,
      "card.new": `Новая открытка`,
      lucky: `Джекпот!`,
      "reward.ok": `Награда у тебя`,
      "event.tickets": `{n} 🎟`,
      cap: `Рюкзак {n}`,
      prod: `Запас {n}`,
      queue: `Очередь {n}`,
      fps: `{n} FPS`,
      "stat.playtime": `Время`,
      "stat.sales": `Продажи`,
      "stat.shells": `Ракушки`,
      "stat.days": `Дней входа`,
      "offline.line": `{name}: {coins} 🪙`,
      "no.crew.idle": `Без помощников остров спит`,
      "prestige.lock": `Фестиваль открывается с 6-го острова`,
      "vip.lock": `VIP-гости появятся на кофейных холмах`,
      "exp.busy": `Этот помощник уже в пути`,
      "exp.hours": `{n} ч`,
      spin: `Крутить`,
      again: `Ещё раз`,
      perfect: `Точно!`,
      good: `Хорошо`,
      miss: `Мимо`,
      casts: `Броски: {n}`,
      "extra.cast": `Ещё бросок`,
      tier: `Награда {n}`,
      contribute: `Твой вклад`,
      "race.board": `Гонка недели`,
      "claim.rank": `Забрать награду за место`,
      place: `{n}-е место`,
      owned: `Уже есть`,
      cost: `{n} 🐚`,
      "income.offline": `Офлайн`,
      mult: `Множитель ×{n}`,
      "tutorial.hand": `Тяни, чтобы идти`,
    },
    en: {
      "boot.title": `Raccoon Harbor`,
      "boot.sub": `The pier is waking up…`,
      "boot.needwebgl": `WebGL is needed to open the harbor.`,
      "hud.coins": `Coins`,
      "hud.shells": `Shells`,
      "hud.stars": `Stars`,
      "nav.map": `Map`,
      "nav.crew": `Crew`,
      "nav.island": `Island`,
      "nav.light": `Beacon`,
      "nav.pass": `Pass`,
      "goal.move": `Drag to walk`,
      "goal.pickup": `Pick up {item}`,
      "goal.drop": `Stock the stall`,
      "goal.till": `Ring the till`,
      "goal.build": `Build {name} — {cost} 🪙`,
      "goal.upgrade": `Upgrade {name} to {level} — {cost} 🪙`,
      "goal.hire": `Hire a helper — {cost} 🪙`,
      "goal.chest": `Open the dock chest`,
      "goal.turbo": `Turbo doubles sales`,
      "goal.quests": `Quests are waiting`,
      "goal.sail": `Sail onward — {cost} 🪙`,
      "goal.play": `Serve the guests`,
      "goal.decor": `Place a decoration — {cost} 🪙`,
      "kind.producer": `bed`,
      "kind.processor": `machine`,
      "kind.stall": `stall`,
      "kind.till": `Till`,
      "kind.house": `Helper house`,
      "kind.decor": `Decoration`,
      "kind.hire": `Hiring`,
      "kind.backpack": `Backpack`,
      "kind.delivery": `Delivery`,
      "kind.attraction": `Carousel`,
      "sheet.map": `Archipelago`,
      "sheet.crew": `Helpers`,
      "sheet.island": `Island`,
      "sheet.light": `Lighthouse`,
      "sheet.pass": `Harbor pass`,
      "sheet.quests": `Quests`,
      "sheet.calendar": `Calendar`,
      "sheet.event": `Event`,
      "sheet.ach": `Achievements`,
      "sheet.cards": `Collections`,
      "sheet.pause": `Pause`,
      "sheet.profile": `Profile`,
      "sheet.offline": `While you were away`,
      "sheet.mail": `Mailbox`,
      "sheet.wheel": `Lucky wheel`,
      "sheet.chest": `Chest`,
      "sheet.expedition": `Expeditions`,
      "sheet.policy": `About`,
      "sheet.fish": `Fishing`,
      "sheet.vip": `VIP order`,
      "sheet.league": `Harbor league`,
      back: `Back`,
      close: `Close`,
      claim: `Collect`,
      "claim.x2": `Collect ×2`,
      "no.ads": `No ad`,
      later: `Later`,
      sail: `Set sail`,
      locked: `Locked`,
      "not.enough": `Not enough yet`,
      "ad.fail": `Ad unavailable, try again later`,
      "ad.mock": `Test ad`,
      "ad.mock.sub": `A real video plays on the portal`,
      turbo: `Turbo ×2`,
      "turbo.shells": `Turbo for 20 🐚`,
      "turbo.ticket": `Turbo ticket`,
      intern: `Intern`,
      "intern.free": `Free intern`,
      "intern.wait": `Intern in {time}`,
      mail: `Mail`,
      quests: `Quests`,
      calendar: `Calendar`,
      event: `Event`,
      pause: `Pause`,
      resume: `Keep playing`,
      settings: `Settings`,
      sound: `Sound`,
      music: `Music`,
      language: `Language`,
      quality: `Graphics`,
      "quality.auto": `Auto`,
      "quality.low": `Low`,
      "quality.medium": `Medium`,
      "quality.high": `High`,
      daily: `Today`,
      weekly: `Week`,
      mayor: `Mayor's orders`,
      "bonus.chest": `Chest for all three`,
      reroll: `Another quest`,
      "reroll.shells": `Reroll for 10 🐚`,
      ready: `Ready`,
      "stars.1": `Every station is open`,
      "stars.2": `Every station is level 10`,
      "stars.3": `The mayor's order is done`,
      prestige: `Island festival`,
      "prestige.do": `Start the festival`,
      "prestige.warn": `Station levels return to 1. This island's income stays ×{mult}.`,
      "pass.star": `Star track`,
      "pass.rocket": `Progress rocket`,
      "pass.need": `{n} more tokens`,
      "pass.overflow": `Chest per 500 XP`,
      "wheel.free": `Free spin`,
      "wheel.ad": `Another spin`,
      "chest.open": `Open`,
      "chest.key": `Open with a key`,
      "chest.ad": `Open and take the reward`,
      "offline.total": `Saved over {time}`,
      welcome: `Welcome back! +30 🐚 and a turbo.`,
      "expedition.go": `Send`,
      "expedition.claim": `Collect cargo`,
      "expedition.skip": `Skip one hour`,
      "fish.cast": `Hook!`,
      "fish.result": `Catch: {score}`,
      "policy.body": `Raccoon Harbor is a single-player game. Saves live on this device and, when the portal supports it, in that portal's cloud. Ads are optional: a reward is granted only after a completed view, and a no-ad path is always beside it. We don't ask for personal data.`,
      "role.cashier": `Cashier`,
      "role.carrier": `Carrier`,
      "role.farmer": `Farmer`,
      "role.general": `Helper`,
      "rarity.common": `Common`,
      "rarity.rare": `Rare`,
      "rarity.epic": `Epic`,
      "rarity.legendary": `Legendary`,
      assign: `Assign`,
      unassign: `Remove`,
      levelup: `Level up`,
      level: `Lv. {n}`,
      slots: `Slots: {used}/{max}`,
      buy: `Buy`,
      equip: `Equip`,
      equipped: `Equipped`,
      "node.buy": `Unlock node`,
      "hour.happy": `Happy hour ×2`,
      "event.soon": `Next festival in {time}`,
      "event.live": `{time} left`,
      join: `I'm in`,
      tickets: `Tickets`,
      rank: `Rank {n}`,
      you: `You`,
      "card.play": `Postcard: {island}`,
      "card.sell": `Goods: {island}`,
      "card.guest": `Rare guest: {island}`,
      "card.expedition": `Sea view: {island}`,
      "card.chest": `Treasure: {island}`,
      "card.mayor": `Mayor's seal: {island}`,
      "set.bonus": `Set complete: +4% income forever`,
      "quest.sell": `Sell {n} items`,
      "quest.sell_item": `Sell {item} ×{n}`,
      "quest.serve": `Serve {n} guests`,
      "quest.upgrade": `Upgrade stations {n} times`,
      "quest.offline": `Collect offline income`,
      "quest.minigame": `Play the minigame`,
      "quest.chest": `Open chests ×{n}`,
      "quest.hire": `Hire or level a helper`,
      "quest.earn": `Earn {n} coins`,
      "quest.vip": `Finish a VIP order`,
      "quest.playtime": `Stay on the island {n} min`,
      "quest.build": `Build a station`,
      "quest.decor": `Place decorations ×{n}`,
      "quest.daily": `Finish {n} daily quests`,
      "quest.expedition": `Send {n} expeditions`,
      "quest.card": `Collect {n} postcards`,
      "chip.upgrade": `Lv. {level} · {cost}`,
      "chip.build": `{cost} 🪙`,
      "mayor.sell": `Sell {n} items`,
      "mayor.sell_item": `Sell {item} ×{n}`,
      "mayor.serve": `Serve {n} guests`,
      "mayor.build": `Build a new station`,
      "mayor.hire": `Hire a helper`,
      "mayor.upgrade": `Upgrade stations {n} times`,
      "mayor.decor": `Place {n} decorations`,
      "mayor.earn": `Earn {n} coins`,
      "sail.confirm": `Spend {cost} coins and open “{name}”?`,
      "sail.needstar": `This island needs a star first`,
      "timer.skip": `Skip construction`,
      "timer.shells": `Speed up for {n} 🐚`,
      "timer.left": `Building for {time}`,
      "vip.need": `Bring {item} ×{n}`,
      "vip.double": `Double the reward`,
      "ach.unlocked": `{name}`,
      "star.toast": `Island star ×{n}!`,
      "empty.mail": `Nothing yet — islands save up once a crew is hired.`,
      "empty.exp": `Pick a helper and a length: 1, 4 or 8 hours.`,
      "fish.hint": `Tap when the fish is in the green`,
      "legend.fish": `A legendary fish!`,
      "pass.level": `Level {n}/30`,
      "free.track": `Free`,
      "star.track": `Star`,
      cosmetic: `Cosmetics`,
      album: `Month album`,
      day: `Day {n}`,
      claimed: `Claimed`,
      today: `Today`,
      "profile.play": `Played`,
      "profile.sales": `Sales`,
      "profile.islands": `Islands`,
      rename: `Name`,
      "league.hint": `Weekly score is coins from every island. Neighbors are simulated on this device.`,
      "build.all": `Stations`,
      "crew.none": `No card yet. Chests and quests bring new helpers.`,
      "need.slot": `No free slot. Build the helper house.`,
      max: `Max`,
      on: `On`,
      off: `Off`,
      "loading.travel": `Sailing to {name}…`,
      "first.star": `First star! The boat is waiting.`,
      "to.boat": `To the boat`,
      "got.it": `Got it`,
      key: `Key`,
      keys: `Keys`,
      shells: `Shells`,
      "coins.word": `coins`,
      "helper.new": `New helper: {name}`,
      "card.new": `New postcard`,
      lucky: `Jackpot!`,
      "reward.ok": `Reward collected`,
      "event.tickets": `{n} 🎟`,
      cap: `Pack {n}`,
      prod: `Stock {n}`,
      queue: `Queue {n}`,
      fps: `{n} FPS`,
      "stat.playtime": `Time`,
      "stat.sales": `Sales`,
      "stat.shells": `Shells`,
      "stat.days": `Login days`,
      "offline.line": `{name}: {coins} 🪙`,
      "no.crew.idle": `Without a crew the island sleeps`,
      "prestige.lock": `Festivals open from island 6`,
      "vip.lock": `VIP guests arrive on the coffee hills`,
      "exp.busy": `This helper is already away`,
      "exp.hours": `{n} h`,
      spin: `Spin`,
      again: `Again`,
      perfect: `Perfect!`,
      good: `Good`,
      miss: `Miss`,
      casts: `Casts: {n}`,
      "extra.cast": `Extra cast`,
      tier: `Reward {n}`,
      contribute: `Your share`,
      "race.board": `Race of the week`,
      "claim.rank": `Collect place reward`,
      place: `Place {n}`,
      owned: `Owned`,
      cost: `{n} 🐚`,
      "income.offline": `Offline`,
      mult: `Multiplier ×{n}`,
      "tutorial.hand": `Drag to walk`,
    },
  };
function C(e, t, n) {
  let r = se[e][t] ?? se.ru[t] ?? t;
  if (n)
    for (let [e, t] of Object.entries(n)) r = r.split(`{${e}}`).join(String(t));
  return r;
}
function w(e, t) {
  let n = Math.floor(Math.abs(e)),
    r = e < 0 ? `-` : ``;
  if (n < 1e4) return r + n.toLocaleString(t === `ru` ? `ru-RU` : `en-US`);
  if (n < 1e6) {
    let e = n / 1e3;
    return (
      r +
      (e >= 100 ? e.toFixed(0) : e.toFixed(1).replace(/\.0$/, ``)) +
      (t === `ru` ? ` тыс.` : `k`)
    );
  }
  let i = n / 1e6;
  return (
    r +
    i.toFixed(i >= 10 ? 0 : 1).replace(/\.0$/, ``) +
    (t === `ru` ? ` млн` : `M`)
  );
}
function T(e, t) {
  let n = Math.max(0, Math.floor(e)),
    r = Math.floor(n / 3600),
    i = Math.floor((n % 3600) / 60);
  if (r > 48) {
    let e = Math.floor(r / 24);
    return t === `ru` ? `${e} д` : `${e}d`;
  }
  return r > 0
    ? `${r}${t === `ru` ? ` ч` : `h`} ${i}${t === `ru` ? ` м` : `m`}`
    : i > 0
      ? `${i}${t === `ru` ? ` м` : `m`} ${n % 60}${t === `ru` ? ` с` : `s`}`
      : `${n}${t === `ru` ? ` с` : `s`}`;
}
var ce = class {
  sx = 0;
  sy = 0;
  esc = !1;
  zoom = 0;
  joy = { active: !1, x: 0, y: 0, px: 0, py: 0 };
  keys = new Set();
  origin = null;
  pointers = new Map();
  pinchDist = 0;
  attach(e) {
    e.addEventListener(`pointerdown`, (e) => this.down(e)),
      window.addEventListener(`pointermove`, (e) => this.move(e)),
      window.addEventListener(`pointerup`, (e) => this.up(e)),
      window.addEventListener(`pointercancel`, (e) => this.up(e)),
      window.addEventListener(`keydown`, (e) => {
        le() ||
          (this.keys.add(e.code),
          e.code === `Escape` && (this.esc = !0),
          [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Space`].includes(
            e.code,
          ) && e.preventDefault());
      }),
      window.addEventListener(`keyup`, (e) => this.keys.delete(e.code)),
      e.addEventListener(
        `wheel`,
        (e) => {
          this.zoom += Math.sign(e.deltaY) * 0.6;
        },
        { passive: !0 },
      ),
      e.addEventListener(`contextmenu`, (e) => e.preventDefault());
  }
  endFrame() {
    (this.esc = !1), (this.zoom = 0);
  }
  blocked(e) {
    return e instanceof Element && !!e.closest(`[data-block]`);
  }
  down(e) {
    if (!this.blocked(e.target)) {
      if (
        (this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }),
        !this.origin)
      )
        (this.origin = { x: e.clientX, y: e.clientY, id: e.pointerId }),
          (this.joy.active = !0),
          (this.joy.px = e.clientX),
          (this.joy.py = e.clientY),
          (this.joy.x = 0),
          (this.joy.y = 0);
      else if (this.pointers.size === 2) {
        let [e, t] = [...this.pointers.values()];
        this.pinchDist = Math.hypot(e.x - t.x, e.y - t.y);
      }
    }
  }
  move(e) {
    if (!this.pointers.has(e.pointerId)) return;
    if (
      (this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }),
      this.pointers.size >= 2 && this.pinchDist > 0)
    ) {
      let [e, t] = [...this.pointers.values()],
        n = Math.hypot(e.x - t.x, e.y - t.y);
      (this.zoom += (this.pinchDist - n) * 0.02), (this.pinchDist = n);
      return;
    }
    if (!this.origin || e.pointerId !== this.origin.id) return;
    let t = e.clientX - this.origin.x,
      n = e.clientY - this.origin.y,
      r = Math.hypot(t, n) || 1,
      i = Math.min(64, r);
    (this.joy.x = (t / r) * i),
      (this.joy.y = (n / r) * i),
      (this.sx = this.joy.x / 64),
      (this.sy = this.joy.y / 64);
  }
  up(e) {
    this.pointers.delete(e.pointerId),
      this.origin &&
        e.pointerId === this.origin.id &&
        ((this.origin = null),
        (this.joy.active = !1),
        (this.joy.x = 0),
        (this.joy.y = 0),
        (this.sx = 0),
        (this.sy = 0)),
      this.pointers.size < 2 && (this.pinchDist = 0);
  }
  axis() {
    let e = 0,
      t = 0;
    if (
      ((this.keys.has(`KeyA`) || this.keys.has(`ArrowLeft`)) && --e,
      (this.keys.has(`KeyD`) || this.keys.has(`ArrowRight`)) && (e += 1),
      (this.keys.has(`KeyW`) || this.keys.has(`ArrowUp`)) && --t,
      (this.keys.has(`KeyS`) || this.keys.has(`ArrowDown`)) && (t += 1),
      e !== 0 || t !== 0)
    ) {
      let n = Math.hypot(e, t) || 1;
      return { x: e / n, y: t / n };
    }
    return { x: this.sx, y: this.sy };
  }
};
function le() {
  let e = document.activeElement;
  return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement;
}
var ue = new Set([
  `island_travel`,
  `event_end`,
  `pause_resume`,
  `offline_return`,
]);
function de(e) {
  return ie.includes(e);
}
function fe(e, t, n) {
  if (
    !ue.has(n) ||
    (e.midgameThisPause && e.rewardedThisPause) ||
    e.rewardedThisPause
  )
    return !1;
  if (de(e.platform)) return !0;
  if (
    e.playtime < 90 ||
    (e.firstSession && e.playtime < 300) ||
    (!e.firstSession && e.playtime < 180) ||
    (e.lastMidgame > 0 && t - e.lastMidgame < 18e4) ||
    (e.lastRewarded > 0 && t - e.lastRewarded < 24e4)
  )
    return !1;
  let r = e.dayAge < 2;
  return !(
    e.midgamesThisHour >= (r ? 4 : 8) || e.midgamesToday >= (r ? 12 : 25)
  );
}
var pe = {
    minigame_extra: 3,
    reroll_quest: 1,
    expedition_skip: 3,
    wheel: 3,
    pass_rocket: 2,
    login_x2: 1,
  },
  me = { turbo: 3e5, intern: 9e5 };
function he(e, t, n) {
  if (de(e.platform)) return !0;
  let r = pe[n];
  if (r !== void 0 && (e.rewardedCounts[n] ?? 0) >= r) return !1;
  let i = me[n];
  if (i !== void 0) {
    let r = Number(e.rewardedCounts[`t:${n}`] ?? 0);
    if (r && t - r < i) return !1;
  }
  return !0;
}
function ge(e, t) {
  (e.lastMidgame = t),
    (e.midgamesToday += 1),
    t - e.hourStart > 36e5 && ((e.hourStart = t), (e.midgamesThisHour = 0)),
    (e.midgamesThisHour += 1),
    (e.midgameThisPause = !0);
}
function _e(e, t, n) {
  (e.lastRewarded = t),
    (e.rewardedCounts[n] = (e.rewardedCounts[n] ?? 0) + 1),
    (e.rewardedCounts[`t:${n}`] = t),
    (e.rewardedThisPause = !0);
}
function ve(e, t) {
  return e === `yandex`
    ? new xe(t)
    : e === `crazy`
      ? new Se(t)
      : e === `poki`
        ? new Ce(t)
        : e === `gamedistribution`
          ? new we(t)
          : e === `google`
            ? new Te(t)
            : e === `telegram`
              ? new Ee(t)
              : new be(t);
}
var ye = class {
    provider;
    save;
    hooks;
    memory;
    busy = !1;
    constructor(e, t, n) {
      (this.provider = e), (this.save = t), (this.hooks = n);
      let r = (Date.now() - t.profile.createdAt) / 864e5;
      this.memory = {
        platform: e.id,
        sessionStart: Date.now(),
        playtime: 0,
        firstSession: t.profile.sessions <= 1,
        dayAge: r,
        lastMidgame: t.ads.lastMidgameAt,
        lastRewarded: t.ads.lastRewardedAt,
        midgamesToday: t.ads.midgamesToday,
        midgamesThisHour: t.ads.midgamesHour,
        hourStart: t.ads.hourStamp || Date.now(),
        rewardedCounts: { ...t.ads.rewarded },
        rewardedThisPause: !1,
        midgameThisPause: !1,
      };
    }
    get platform() {
      return this.provider.id;
    }
    async init() {
      await this.provider.init();
    }
    gameplayStart() {
      this.provider.gameplayStart();
    }
    gameplayStop() {
      this.provider.gameplayStop();
    }
    loadingStart() {
      this.provider.loadingStart();
    }
    loadingStop() {
      this.provider.loadingStop();
    }
    tick(e) {
      this.memory.playtime += e;
    }
    canOffer(e) {
      return he(this.memory, Date.now(), e);
    }
    async showRewarded(e) {
      if (this.busy || !he(this.memory, Date.now(), e)) return !1;
      (this.busy = !0), this.hooks.pause();
      let t = !1;
      try {
        t = await this.provider.showRewarded(e);
      } catch {
        t = !1;
      }
      return (
        this.hooks.resume(),
        (this.busy = !1),
        t
          ? (_e(this.memory, Date.now(), e), this.persist())
          : !de(this.provider.id) &&
            this.provider.id !== `poki` &&
            this.hooks.toast(`ad.fail`),
        t
      );
    }
    async midgame(e) {
      if (!this.busy && fe(this.memory, Date.now(), e)) {
        (this.busy = !0), this.hooks.pause();
        try {
          await this.provider.requestMidgame(e),
            ge(this.memory, Date.now()),
            this.persist();
        } catch {}
        this.hooks.resume(), (this.busy = !1);
      }
    }
    beginPause() {
      (this.memory.rewardedThisPause = !1), (this.memory.midgameThisPause = !1);
    }
    persist() {
      (this.save.ads.lastMidgameAt = this.memory.lastMidgame),
        (this.save.ads.lastRewardedAt = this.memory.lastRewarded),
        (this.save.ads.midgamesToday = this.memory.midgamesToday),
        (this.save.ads.midgamesHour = this.memory.midgamesThisHour),
        (this.save.ads.hourStamp = this.memory.hourStart);
      let e = {};
      for (let [t, n] of Object.entries(this.memory.rewardedCounts))
        t.startsWith(`t:`) || (e[t] = n);
      this.save.ads.rewarded = e;
    }
    async serverNow() {
      try {
        if (this.provider.serverTime) return await this.provider.serverTime();
      } catch {}
      return Date.now();
    }
  },
  be = class {
    hooks;
    id = `web`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {}
    gameplayStart() {}
    gameplayStop() {}
    loadingStart() {}
    loadingStop() {}
    hasAdblock() {
      return !1;
    }
    async requestMidgame() {
      await this.play(!1);
    }
    async showRewarded() {
      let e = new URLSearchParams(location.search).get(`adfail`) === `1`;
      return await this.play(!0), !e;
    }
    play(e) {
      this.hooks.onOpen();
      let t = document.createElement(`div`);
      return (
        (t.className = `mock-ad`),
        (t.innerHTML = `<div class="mock-card"><b>${e ? `🎬` : ``} Тестовая реклама</b><p>На площадке здесь будет ролик</p><div class="mock-bar"></div></div>`),
        document.body.appendChild(t),
        new Promise((e) => {
          setTimeout(() => {
            t.remove(), this.hooks.onClose(), e();
          }, 1600);
        })
      );
    }
  },
  xe = class {
    hooks;
    id = `yandex`;
    ysdk = null;
    constructor(e) {
      this.hooks = e;
    }
    async init() {
      let e = window.YaGames;
      e && (this.ysdk = await e.init());
    }
    gameplayStart() {}
    gameplayStop() {}
    loadingStart() {}
    loadingStop() {
      this.ysdk?.features?.LoadingAPI?.ready?.();
    }
    hasAdblock() {
      return !1;
    }
    async serverTime() {
      return this.ysdk?.serverTime?.() ?? Date.now();
    }
    cloudSave = {
      pull: async () =>
        (await (await this.ysdk?.getPlayer({ signed: !1 }))?.getData?.()) ??
        null,
      push: async (e) => {
        await (await this.ysdk?.getPlayer({ signed: !1 }))?.setData?.(e, !0);
      },
    };
    async requestMidgame() {
      this.ysdk &&
        (await new Promise((e) => {
          this.ysdk.adv.showFullscreenAdv({
            callbacks: {
              onOpen: () => this.hooks.onOpen(),
              onClose: () => {
                this.hooks.onClose(), e();
              },
              onError: () => {
                this.hooks.onClose(), e();
              },
            },
          });
        }));
    }
    async showRewarded() {
      return this.ysdk
        ? new Promise((e) => {
            let t = !1;
            this.ysdk.adv.showRewardedVideo({
              callbacks: {
                onOpen: () => this.hooks.onOpen(),
                onRewarded: () => {
                  t = !0;
                },
                onClose: () => {
                  this.hooks.onClose(), e(t);
                },
                onError: () => {
                  this.hooks.onClose(), e(!1);
                },
              },
            });
          })
        : !1;
    }
  },
  Se = class {
    hooks;
    id = `crazy`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {
      await window.CrazyGames?.SDK.init();
    }
    gameplayStart() {
      window.CrazyGames?.SDK.game.gameplayStart();
    }
    gameplayStop() {
      window.CrazyGames?.SDK.game.gameplayStop();
    }
    loadingStart() {
      window.CrazyGames?.SDK.game.loadingStart();
    }
    loadingStop() {
      window.CrazyGames?.SDK.game.loadingStop();
    }
    hasAdblock() {
      return !1;
    }
    cloudSave = {
      pull: async () => {
        let e = window.CrazyGames?.SDK.data?.get(CLOUD_KEY);
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch {
          return null;
        }
      },
      push: async (e) => {
        window.CrazyGames?.SDK.data?.set(CLOUD_KEY, JSON.stringify(e));
      },
    };
    async requestMidgame() {
      await this.request(`midgame`);
    }
    async showRewarded() {
      let e = window.CrazyGames?.SDK;
      return e
        ? new Promise((t) => {
            e.ad.requestAd(`rewarded`, {
              adStarted: () => this.hooks.onOpen(),
              adFinished: () => {
                this.hooks.onClose(), t(!0);
              },
              adError: () => {
                this.hooks.onClose(), t(!1);
              },
            }),
              setTimeout(() => {}, 1e3);
          })
        : !1;
    }
    request(e) {
      let t = window.CrazyGames?.SDK;
      return t
        ? new Promise((n) => {
            t.ad.requestAd(e, {
              adStarted: () => this.hooks.onOpen(),
              adFinished: () => {
                this.hooks.onClose(), n();
              },
              adError: () => {
                this.hooks.onClose(), n();
              },
            });
          })
        : Promise.resolve();
    }
  },
  Ce = class {
    hooks;
    id = `poki`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {
      window.PokiSDK?.setDebug?.(!1), await window.PokiSDK?.init();
    }
    gameplayStart() {
      window.PokiSDK?.gameplayStart();
    }
    gameplayStop() {
      window.PokiSDK?.gameplayStop();
    }
    loadingStart() {
      window.PokiSDK?.gameLoadingStart?.();
    }
    loadingStop() {
      window.PokiSDK?.gameLoadingFinished?.();
    }
    hasAdblock() {
      return !1;
    }
    async requestMidgame() {
      this.hooks.onOpen();
      try {
        await window.PokiSDK?.commercialBreak();
      } catch {}
      this.hooks.onClose();
    }
    async showRewarded() {
      if (!window.PokiSDK) return !1;
      this.hooks.onOpen();
      let e = !1;
      try {
        e = await window.PokiSDK.rewardedBreak();
      } catch {
        e = !1;
      }
      return this.hooks.onClose(), !!e;
    }
  },
  we = class {
    hooks;
    id = `gamedistribution`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {}
    gameplayStart() {}
    gameplayStop() {}
    loadingStart() {}
    loadingStop() {}
    hasAdblock() {
      return !1;
    }
    async requestMidgame() {
      if (window.gdsdk) {
        this.hooks.onOpen();
        try {
          await window.gdsdk.showAd(window.gdsdk.AdType?.Interstitial);
        } catch {}
        this.hooks.onClose();
      }
    }
    async showRewarded() {
      if (!window.gdsdk) return !1;
      this.hooks.onOpen();
      try {
        return (
          await window.gdsdk.showAd(window.gdsdk.AdType?.Rewarded),
          this.hooks.onClose(),
          !0
        );
      } catch {
        return this.hooks.onClose(), !1;
      }
    }
  },
  Te = class {
    hooks;
    id = `google`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {}
    gameplayStart() {}
    gameplayStop() {}
    loadingStart() {}
    loadingStop() {}
    hasAdblock() {
      return !1;
    }
    async requestMidgame() {
      await this.break(`next`);
    }
    async showRewarded(e) {
      return window.adBreak
        ? new Promise((t) => {
            let n = !1;
            window.adBreak({
              type: `reward`,
              name: e,
              beforeReward: (e) => {
                this.hooks.onOpen(), e();
              },
              adViewed: () => {
                n = !0;
              },
              adDismissed: () => {},
              adBreakDone: () => {
                this.hooks.onClose(), t(n);
              },
            });
          })
        : !1;
    }
    break(e) {
      return window.adBreak
        ? new Promise((t) => {
            window.adBreak({
              type: e,
              beforeAd: () => this.hooks.onOpen(),
              adBreakDone: () => {
                this.hooks.onClose(), t();
              },
            });
          })
        : Promise.resolve();
    }
  },
  Ee = class {
    hooks;
    id = `telegram`;
    constructor(e) {
      this.hooks = e;
    }
    async init() {
      window.Telegram?.WebApp?.ready?.(), window.Telegram?.WebApp?.expand?.();
    }
    gameplayStart() {}
    gameplayStop() {}
    loadingStart() {}
    loadingStop() {}
    hasAdblock() {
      return !1;
    }
    cloudSave = {
      pull: () =>
        new Promise((e) => {
          let t = window.Telegram?.WebApp?.CloudStorage;
          if (!t) return e(null);
          t.getItem(`rh`, (t, n) => {
            try {
              e(n ? JSON.parse(n) : null);
            } catch {
              e(null);
            }
          });
        }),
      push: (e) =>
        new Promise((t) => {
          window.Telegram?.WebApp?.CloudStorage?.setItem(
            `rh`,
            JSON.stringify(e),
            () => t(),
          ),
            window.Telegram?.WebApp?.CloudStorage || t();
        }),
    };
    async requestMidgame() {
      await this.show();
    }
    async showRewarded() {
      return this.show();
    }
    async show() {
      let e = window.__TELEGRAM_BLOCK_ID;
      if (!window.Adsgram || !e) return !1;
      this.hooks.onOpen();
      try {
        return (
          await window.Adsgram.init({ blockId: e }).show(),
          this.hooks.onClose(),
          !0
        );
      } catch {
        return this.hooks.onClose(), !1;
      }
    }
  };
function De(e, t) {
  return (
    (e * e) / (9.05 * 9.05) + (t * t) / 76.5625 <= 1 ||
    (Math.abs(e) <= 1.65 && t >= 7.2 && t <= 15.4)
  );
}
function Oe(e, t, n, r) {
  return De(e, t)
    ? { x: e, z: t }
    : De(e, r)
      ? { x: e, z: r }
      : De(n, t)
        ? { x: n, z: t }
        : { x: n, z: r };
}
var E = [
    {
      id: `harvest`,
      mechanic: `harvest`,
      name: { ru: `Ярмарка урожая`, en: `Harvest fair` },
      blurb: {
        ru: `Каждая продажа приносит билет ярмарки.`,
        en: `Every sale earns a fair ticket.`,
      },
    },
    {
      id: `fishing`,
      mechanic: `fishing`,
      name: { ru: `Рыбалка`, en: `Fishing` },
      blurb: {
        ru: `Подсекай на пирсе — билеты за точный бросок.`,
        en: `Hook the pier in time — tickets for a clean cast.`,
      },
    },
    {
      id: `race`,
      mechanic: `race`,
      name: { ru: `Гонка лодок`, en: `Boat race` },
      blurb: {
        ru: `Продажи этой недели — твой ход в гонке из 30 гаваней.`,
        en: `This week's sales are your move in a 30-harbor race.`,
      },
    },
    {
      id: `beacon`,
      mechanic: `beacon`,
      name: { ru: `Стройка маяка`, en: `Lighthouse raising` },
      blurb: {
        ru: `Тащи материалы продажами — шкала праздника растёт.`,
        en: `Sales haul materials and fill the festival bar.`,
      },
    },
  ],
  ke = [`play`, `sell`, `guest`, `expedition`, `chest`, `mayor`],
  Ae = [
    {
      id: 1,
      name: { ru: `Морковная пристань`, en: `Carrot Pier` },
      blurb: {
        ru: `Грядки, прилавки и первая касса.`,
        en: `Beds, stalls and your first till.`,
      },
      ground: `#7BD35A`,
      sand: `#F6DFA4`,
      sky: `#8FD4F5`,
      water: `#3EC5E0`,
      tree: `#4FA845`,
      accent: `#FF7A59`,
      customers: [`bunny`, `fox`, `bear`, `cat`],
      goods: [
        {
          id: `carrot`,
          name: { ru: `Морковь`, en: `Carrot` },
          color: `#FF8A3D`,
        },
        {
          id: `cabbage`,
          name: { ru: `Капуста`, en: `Cabbage` },
          color: `#8ED15A`,
        },
        {
          id: `pumpkin`,
          name: { ru: `Тыква`, en: `Pumpkin` },
          color: `#FF9F1C`,
        },
      ],
      extra: 1,
    },
    {
      id: 2,
      name: { ru: `Рыбацкая бухта`, en: `Fisher Bay` },
      blurb: {
        ru: `Улов и коптильня на причале.`,
        en: `A catch and a smokehouse on the pier.`,
      },
      ground: `#B7D36A`,
      sand: `#F3D7A0`,
      sky: `#8EC8EE`,
      water: `#2E9CC0`,
      tree: `#3E8E74`,
      accent: `#E08A4F`,
      customers: [`bird`, `cat`, `fox`, `crab`],
      goods: [
        { id: `fish`, name: { ru: `Рыба`, en: `Fish` }, color: `#5EC8E6` },
        {
          id: `smoked`,
          name: { ru: `Копчёная рыба`, en: `Smoked fish` },
          color: `#E08A4F`,
          input: `fish`,
        },
      ],
      extra: 2,
    },
    {
      id: 3,
      name: { ru: `Яблоневый склон`, en: `Apple Slope` },
      blurb: {
        ru: `Яблоки становятся соком, сок — пирожками.`,
        en: `Apples become juice, juice becomes pies.`,
      },
      ground: `#8ED36A`,
      sand: `#F6DFA4`,
      sky: `#A9D9F6`,
      water: `#3EC5E0`,
      tree: `#E25B57`,
      accent: `#F2C14E`,
      customers: [`goat`, `bunny`, `bear`, `bird`],
      goods: [
        {
          id: `apple`,
          name: { ru: `Яблоко`, en: `Apple` },
          color: `#E23B3B`,
          sell: !1,
        },
        {
          id: `juice`,
          name: { ru: `Сок`, en: `Juice` },
          color: `#F2C14E`,
          input: `apple`,
        },
        {
          id: `pie`,
          name: { ru: `Пирожок`, en: `Pie` },
          color: `#D4A574`,
          input: `juice`,
        },
      ],
      extra: 1,
    },
    {
      id: 4,
      name: { ru: `Молочная ферма`, en: `Dairy Farm` },
      blurb: { ru: `Коровы, молоко и сыр.`, en: `Cows, milk and cheese.` },
      ground: `#6FCB62`,
      sand: `#F6DFA4`,
      sky: `#B7E3F8`,
      water: `#3EC5E0`,
      tree: `#4FA845`,
      accent: `#FFE38A`,
      customers: [`sheep`, `pig`, `cat`, `bunny`],
      goods: [
        { id: `milk`, name: { ru: `Молоко`, en: `Milk` }, color: `#FFF6E4` },
        {
          id: `cheese`,
          name: { ru: `Сыр`, en: `Cheese` },
          color: `#FFD15C`,
          input: `milk`,
        },
      ],
      extra: 2,
    },
    {
      id: 5,
      name: { ru: `Пчелиный луг`, en: `Bee Meadow` },
      blurb: {
        ru: `Мёд и свечи с пасеки.`,
        en: `Honey and candles from the hives.`,
      },
      ground: `#C6D85A`,
      sand: `#F6DFA4`,
      sky: `#B9E4F8`,
      water: `#3EC5E0`,
      tree: `#8FBF4A`,
      accent: `#F5B942`,
      customers: [`bear`, `bunny`, `fox`, `owl`],
      goods: [
        { id: `honey`, name: { ru: `Мёд`, en: `Honey` }, color: `#F5B942` },
        {
          id: `candle`,
          name: { ru: `Свеча`, en: `Candle` },
          color: `#FFE7A3`,
          input: `honey`,
        },
      ],
      extra: 2,
    },
    {
      id: 6,
      name: { ru: `Пекарня-мельница`, en: `Mill Bakery` },
      blurb: {
        ru: `Зерно, мука и хлеб — цепочка из трёх шагов.`,
        en: `Grain, flour and bread — a three-step chain.`,
      },
      ground: `#C9D36A`,
      sand: `#F3D7A0`,
      sky: `#F2E2B8`,
      water: `#3AAFC8`,
      tree: `#C68642`,
      accent: `#E0A15A`,
      customers: [`pig`, `cat`, `goat`, `bunny`],
      goods: [
        {
          id: `wheat`,
          name: { ru: `Зерно`, en: `Grain` },
          color: `#E6C56A`,
          sell: !1,
        },
        {
          id: `flour`,
          name: { ru: `Мука`, en: `Flour` },
          color: `#F4F0E6`,
          input: `wheat`,
        },
        {
          id: `bread`,
          name: { ru: `Хлеб`, en: `Bread` },
          color: `#C68642`,
          input: `flour`,
        },
      ],
      extra: 2,
    },
    {
      id: 7,
      name: { ru: `Кофейные холмы`, en: `Coffee Hills` },
      blurb: {
        ru: `Кофе и столики: гости задерживаются.`,
        en: `Coffee and tables — guests stay a while.`,
      },
      ground: `#7FBF6A`,
      sand: `#E7C48A`,
      sky: `#E7D3B5`,
      water: `#3AAFC8`,
      tree: `#6F4E37`,
      accent: `#8D6E63`,
      customers: [`cat`, `owl`, `fox`, `bear`],
      seated: !0,
      goods: [
        {
          id: `coffee`,
          name: { ru: `Кофе`, en: `Coffee` },
          color: `#6F4E37`,
          sell: !1,
        },
        {
          id: `cup`,
          name: { ru: `Чашка кофе`, en: `Coffee cup` },
          color: `#C4A484`,
          input: `coffee`,
        },
        { id: `bun`, name: { ru: `Булочка`, en: `Bun` }, color: `#E2B07A` },
      ],
      extra: 2,
    },
    {
      id: 8,
      name: { ru: `Ягодное болото`, en: `Berry Bog` },
      blurb: {
        ru: `Ягоды, варенье и гости-лягушки.`,
        en: `Berries, jam and frog guests.`,
      },
      ground: `#5EBF78`,
      sand: `#E7D7A4`,
      sky: `#B7E0C8`,
      water: `#2E8F78`,
      tree: `#3E8E55`,
      accent: `#C43B6E`,
      customers: [`frog`, `bird`, `capybara`, `bunny`],
      goods: [
        { id: `berry`, name: { ru: `Ягода`, en: `Berry` }, color: `#E85D8C` },
        {
          id: `jam`,
          name: { ru: `Варенье`, en: `Jam` },
          color: `#C43B6E`,
          input: `berry`,
        },
      ],
      extra: 3,
    },
    {
      id: 9,
      name: { ru: `Ледяной фьорд`, en: `Ice Fjord` },
      blurb: { ru: `Мороженое и пингвины.`, en: `Ice cream and penguins.` },
      ground: `#D5EDE8`,
      sand: `#F4EFE4`,
      sky: `#D5EEF8`,
      water: `#7EC8E0`,
      tree: `#E7F4F6`,
      accent: `#F2F7FF`,
      customers: [`penguin`, `owl`, `fox`, `bear`],
      goods: [
        {
          id: `snow`,
          name: { ru: `Снег`, en: `Snow` },
          color: `#F4FBFF`,
          sell: !1,
        },
        {
          id: `ice`,
          name: { ru: `Мороженое`, en: `Ice cream` },
          color: `#C8F4FF`,
          input: `snow`,
        },
        {
          id: `sorbet`,
          name: { ru: `Сорбет`, en: `Sorbet` },
          color: `#FFB7D5`,
          input: `ice`,
        },
      ],
      extra: 2,
    },
    {
      id: 10,
      name: { ru: `Тропический риф`, en: `Tropic Reef` },
      blurb: {
        ru: `Кокосы, коктейли и лодочная доставка.`,
        en: `Coconuts, cocktails and a delivery boat.`,
      },
      ground: `#3FCB7A`,
      sand: `#F6DFA4`,
      sky: `#7ED0F5`,
      water: `#1E8FB8`,
      tree: `#2E8F4A`,
      accent: `#FF6B8A`,
      customers: [`crab`, `bird`, `cat`, `fox`],
      delivery: !0,
      goods: [
        {
          id: `coconut`,
          name: { ru: `Кокос`, en: `Coconut` },
          color: `#F5E6C8`,
        },
        {
          id: `cocktail`,
          name: { ru: `Коктейль`, en: `Cocktail` },
          color: `#FF6B8A`,
          input: `coconut`,
        },
      ],
      extra: 3,
    },
    {
      id: 11,
      name: { ru: `Ярмарочная гора`, en: `Fair Mountain` },
      blurb: {
        ru: `Сладкая вата и карусель.`,
        en: `Cotton candy and a carousel.`,
      },
      ground: `#8ED36A`,
      sand: `#F6DFA4`,
      sky: `#F7D2E4`,
      water: `#3EC5E0`,
      tree: `#4FA845`,
      accent: `#FF7AB6`,
      customers: [`bunny`, `bear`, `pig`, `fox`],
      attraction: !0,
      goods: [
        {
          id: `cotton`,
          name: { ru: `Сладкая вата`, en: `Cotton candy` },
          color: `#FFB7D5`,
        },
        {
          id: `ticket`,
          name: { ru: `Билетик`, en: `Ticket` },
          color: `#FFE38A`,
        },
      ],
      extra: 3,
    },
    {
      id: 12,
      name: { ru: `Звёздный маяк`, en: `Star Beacon` },
      blurb: {
        ru: `Финал архипелага: великая ярмарка.`,
        en: `The end of the archipelago: the great fair.`,
      },
      ground: `#6EBE9A`,
      sand: `#F6DFA4`,
      sky: `#9EC9F5`,
      water: `#2E8FBF`,
      tree: `#C9A6FF`,
      accent: `#FFE38A`,
      customers: [`raccoon`, `owl`, `fox`, `penguin`, `bunny`, `crab`],
      goods: [
        {
          id: `starfruit`,
          name: { ru: `Звездоплод`, en: `Starfruit` },
          color: `#C9A6FF`,
        },
        {
          id: `mooncake`,
          name: { ru: `Лунный пряник`, en: `Moon cake` },
          color: `#F2E2FF`,
          input: `starfruit`,
        },
        {
          id: `tea`,
          name: { ru: `Маячный чай`, en: `Beacon tea` },
          color: `#9EE0C8`,
        },
      ],
      extra: 4,
      seated: !0,
    },
  ];
function je(e, t) {
  return t === `stall`
    ? `stall`
    : t === `till`
      ? `till`
      : t === `house`
        ? `house`
        : t === `decor`
          ? `decor`
          : t === `hire`
            ? `hire`
            : t === `backpack`
              ? `pack`
              : t === `delivery`
                ? `delivery`
                : t === `attraction`
                  ? `attraction`
                  : t === `processor`
                    ? `machine`
                    : ({
                        fish: `pier`,
                        milk: `cow`,
                        honey: `hive`,
                        wheat: `mill`,
                        apple: `tree`,
                        coffee: `bush`,
                        berry: `bog`,
                        snow: `freezer`,
                        coconut: `palm`,
                        cotton: `machine`,
                        tea: `kettle`,
                        starfruit: `crystal`,
                      }[e] ?? `crop`);
}
function Me(e, t) {
  let n = new Set(),
    r = t,
    i = new Set();
  for (; r && !i.has(r); )
    i.add(r), n.add(r), (r = e.find((e) => e.id === r)?.input);
  return n;
}
function Ne(e) {
  let t = e.filter((e) => e.kind !== `till`);
  for (let e = 0; e < 10; e++) {
    for (let e = 0; e < t.length; e++)
      for (let n = e + 1; n < t.length; n++) {
        let r = t[e],
          i = t[n],
          a = i.x - r.x,
          o = i.z - r.z,
          s = Math.hypot(a, o),
          c = 3.15;
        if ((s < 0.001 && ((a = 1), (o = 0), (s = 1)), s < c)) {
          let e = (c - s) / 2;
          (a /= s),
            (o /= s),
            (r.x -= a * e),
            (r.z -= o * e),
            (i.x += a * e),
            (i.z += o * e);
        }
      }
    for (let e of t) De(e.x, e.z) || ((e.x *= 0.9), (e.z *= 0.9));
  }
}
function Pe(e) {
  let t = e.goods.map((e, t) => ({
      id: e.id,
      name: e.name,
      color: e.color,
      k: t + 1,
      input: e.input,
      sell: e.sell !== !1,
    })),
    n = t.find((e) => e.sell) ?? t[0],
    r = Me(e.goods, n.id),
    i = [],
    a = 1,
    o = t.length,
    s = (e) => (o <= 1 ? 0.2 : 2.6 - e * (6.4 / (o - 1)));
  t.forEach((e, t) => {
    let n = s(t),
      o = !!e.input,
      c = o ? `proc_${e.id}` : `field_${e.id}`,
      l = r.has(e.id);
    if (
      (i.push({
        id: c,
        kind: o ? `processor` : `producer`,
        k: a++,
        item: e.id,
        input: e.input,
        x: o ? -0.4 : -3.8,
        z: n,
        built: l,
        star: !0,
        scale: !0,
        visual: je(e.id, o ? `processor` : `producer`),
      }),
      e.sell)
    ) {
      let t = r.has(e.id);
      i.push({
        id: `stall_${e.id}`,
        kind: `stall`,
        k: a++,
        item: e.id,
        x: 3.15,
        z: n,
        built: t,
        star: !0,
        scale: !0,
        visual: `stall`,
      });
    }
  });
  let c = t.find((e) => !e.input) ?? t[0];
  for (let t = 0; t < e.extra; t++)
    i.push({
      id: `extra_${c.id}_${t}`,
      kind: `producer`,
      k: a++,
      item: c.id,
      x: -6.3 + (t % 2) * 1.6,
      z: 5.4 - t * 1.7,
      built: !1,
      star: !0,
      scale: !0,
      visual: je(c.id, `producer`),
    });
  i.push({
    id: `till`,
    kind: `till`,
    k: 1,
    x: 2.5,
    z: 6.15,
    built: !0,
    star: !0,
    scale: !0,
    visual: `till`,
  }),
    i.push({
      id: `house`,
      kind: `house`,
      k: a++,
      x: -0.4,
      z: -6.3,
      built: !1,
      star: !0,
      scale: !1,
      visual: `house`,
    }),
    i.push({
      id: `hire`,
      kind: `hire`,
      k: 1,
      x: -3.3,
      z: 6.15,
      built: !0,
      star: !1,
      scale: !1,
      visual: `hire`,
    }),
    i.push({
      id: `pack`,
      kind: `backpack`,
      k: 2,
      x: 5.6,
      z: 5.5,
      built: !0,
      star: !1,
      scale: !1,
      visual: `pack`,
    }),
    e.delivery &&
      i.push({
        id: `delivery`,
        kind: `delivery`,
        k: a++,
        item: c.id,
        x: -5.4,
        z: 5.8,
        built: !1,
        star: !0,
        scale: !1,
        visual: `delivery`,
      }),
    e.attraction &&
      i.push({
        id: `attraction`,
        kind: `attraction`,
        k: a++,
        x: -5.2,
        z: 4.6,
        built: !1,
        star: !0,
        scale: !1,
        visual: `attraction`,
      });
  let l = [`#FF7A59`, `#8E6CFF`, `#5ED17A`, `#FFB938`, `#5EC8E6`];
  for (let e = 0; e < 5; e++)
    i.push({
      id: `decor_${e}`,
      kind: `decor`,
      k: e + 1,
      x: e < 3 ? 6.6 : -6.8,
      z: e < 3 ? 3.4 - e * 3.1 : 2.2 - (e - 3) * 3.4,
      built: !1,
      star: !1,
      scale: !1,
      visual: [`bench`, `flowers`, `lamp`, `flowers`, `bench`][e] ?? `bench`,
    }),
      l[e];
  Ne(i);
  let u = Fe(e.id, t, i),
    d = ke.map((t) => ({
      id: `${e.id}:${t}`,
      source: t,
      rarity:
        t === `mayor` || t === `chest`
          ? `epic`
          : t === `guest` || t === `expedition`
            ? `rare`
            : `common`,
    })),
    f = e.seated
      ? [
          { x: 2.2, z: 2.4 },
          { x: 2.2, z: -1.2 },
          { x: 2.2, z: -4.6 },
        ]
      : [];
  return {
    id: e.id,
    name: e.name,
    blurb: e.blurb,
    ground: e.ground,
    sand: e.sand,
    sky: e.sky,
    water: e.water,
    tree: e.tree,
    accent: e.accent,
    goods: t,
    stations: i,
    customers: e.customers,
    seated: !!e.seated,
    cards: d,
    mayor: u,
    seats: f,
  };
}
function Fe(e, t, n) {
  let r = t.filter((e) => e.sell),
    i = r[0] ?? t[0],
    a = r[1] ?? i,
    o = n.find((e) => e.star && !e.built),
    s = 400 * e * e;
  return [
    { id: `m_sell`, type: `sell_item`, item: i.id, count: 20 + e * 5 },
    { id: `m_build`, type: `build`, stationId: o?.id, count: 1 },
    { id: `m_serve`, type: `serve`, count: 25 + e * 8 },
    { id: `m_hire`, type: `hire`, count: 1 },
    { id: `m_sell2`, type: `sell_item`, item: a.id, count: 30 + e * 6 },
    { id: `m_up`, type: `upgrade`, count: 3 },
    { id: `m_decor`, type: `decor`, count: 2 },
    { id: `m_earn`, type: `earn`, count: s },
  ];
}
var D = Ae.map(Pe);
function O(e) {
  let t = D.find((t) => t.id === e);
  if (!t) throw Error(`island ${e}`);
  return t;
}
function Ie(e, t) {
  return e.goods.find((e) => e.id === t);
}
var Le = [
  k(
    `stepa`,
    { ru: `Заяц Стёпа`, en: `Stepa the hare` },
    `common`,
    `cashier`,
    `bunny`,
    `#F4E6D4`,
    `#F2A3B5`,
    { serve: 0.22 },
    { ru: `Быстрее пробивает кассу`, en: `Checks customers out faster` },
  ),
  k(
    `alisa`,
    { ru: `Лиса Алиса`, en: `Alisa the fox` },
    `common`,
    `carrier`,
    `fox`,
    `#F08A3C`,
    `#FFE1C4`,
    { speed: 0.1 },
    { ru: `Носит товары на прилавок`, en: `Carries goods to the stall` },
  ),
  k(
    `misha`,
    { ru: `Медведь Миша`, en: `Misha the bear` },
    `common`,
    `farmer`,
    `bear`,
    `#A56A3A`,
    `#F0C9A0`,
    { prod: 0.28, cap: 1 },
    {
      ru: `Ускоряет грядки и тащит больше`,
      en: `Speeds the beds and carries more`,
    },
  ),
  k(
    `krya`,
    { ru: `Утка Кря`, en: `Krya the duck` },
    `common`,
    `general`,
    `bird`,
    `#F2F4F6`,
    `#F5C542`,
    { lambda: 0.08 },
    { ru: `Зовёт больше гостей`, en: `Draws more guests` },
  ),
  k(
    `tosha`,
    { ru: `Ёжик Тоша`, en: `Tosha the hedgehog` },
    `common`,
    `farmer`,
    `bear`,
    `#8A6A4A`,
    `#E8D2B0`,
    { offline: 0.12 },
    {
      ru: `Острова лучше работают без тебя`,
      en: `Islands work harder while you are away`,
    },
  ),
  k(
    `vaska`,
    { ru: `Кот Вася`, en: `Vaska the cat` },
    `common`,
    `general`,
    `cat`,
    `#F0A050`,
    `#FFE8C8`,
    { income: 0.07 },
    { ru: `Чуть щедрее чек`, en: `A slightly richer receipt` },
  ),
  k(
    `rita`,
    { ru: `Енот Рита`, en: `Rita the raccoon` },
    `rare`,
    `carrier`,
    `raccoon`,
    `#8D8278`,
    `#F4E2C8`,
    { speed: 0.12, cap: 2 },
    { ru: `Быстрые лапы и большой стек`, en: `Quick paws and a bigger stack` },
  ),
  k(
    `mudra`,
    { ru: `Сова Мудра`, en: `Mudra the owl` },
    `rare`,
    `general`,
    `owl`,
    `#C8B48A`,
    `#F2E2B0`,
    { income: 0.12 },
    { ru: `Знает, почём товар`, en: `Knows what a good is worth` },
  ),
  k(
    `pip`,
    { ru: `Пингвин Пип`, en: `Pip the penguin` },
    `rare`,
    `cashier`,
    `penguin`,
    `#2E3340`,
    `#F4F7FA`,
    { serve: 0.3 },
    { ru: `Касса почти не простаивает`, en: `The till barely idles` },
  ),
  k(
    `zorka`,
    { ru: `Коза Зорька`, en: `Zorka the goat` },
    `rare`,
    `farmer`,
    `goat`,
    `#E6E0D6`,
    `#F2C14E`,
    { prod: 0.36 },
    { ru: `Грядки спеют быстрее`, en: `Beds ripen faster` },
  ),
  k(
    `hryu`,
    { ru: `Свин Хрю`, en: `Hryu the pig` },
    `rare`,
    `general`,
    `pig`,
    `#F2A3B0`,
    `#FFD0D6`,
    { income: 0.14 },
    { ru: `Гости оставляют больше`, en: `Guests leave a little more` },
  ),
  k(
    `kira`,
    { ru: `Белка Кира`, en: `Kira the squirrel` },
    `rare`,
    `carrier`,
    `fox`,
    `#E07A3A`,
    `#F8D7B0`,
    { speed: 0.16 },
    { ru: `Носится между станциями`, en: `Darts between stations` },
  ),
  k(
    `borya`,
    { ru: `Капибара Боря`, en: `Borya the capybara` },
    `epic`,
    `carrier`,
    `capybara`,
    `#B88858`,
    `#F0D2B0`,
    { cap: 4, income: 0.08 },
    { ru: `Стек как плот`, en: `A stack like a raft` },
  ),
  k(
    `grisha`,
    { ru: `Журавль Гриша`, en: `Grisha the crane` },
    `epic`,
    `general`,
    `bird`,
    `#F4F6F8`,
    `#E23B3B`,
    { lambda: 0.14 },
    { ru: `Очередь сама находится`, en: `The queue finds you` },
  ),
  k(
    `lada`,
    { ru: `Выдра Лада`, en: `Lada the otter` },
    `epic`,
    `farmer`,
    `fox`,
    `#6AA8C8`,
    `#F4E2C8`,
    { offline: 0.22 },
    { ru: `Офлайн течёт ровнее`, en: `Offline income flows smoother` },
  ),
  k(
    `luna`,
    { ru: `Панда Луна`, en: `Luna the panda` },
    `epic`,
    `cashier`,
    `bear`,
    `#F7F7F7`,
    `#2A2A2A`,
    { income: 0.18, serve: 0.15 },
    { ru: `Спокойная касса, жирный чек`, en: `A calm till and a fat receipt` },
  ),
  k(
    `fenya`,
    { ru: `Фенек Феня`, en: `Fenya the fennec` },
    `epic`,
    `carrier`,
    `fox`,
    `#F6C56A`,
    `#FFF0D0`,
    { speed: 0.22 },
    { ru: `Самые быстрые уши в гавани`, en: `The fastest ears in the harbor` },
  ),
  k(
    `dyoma`,
    { ru: `Бобёр Дёма`, en: `Dyoma the beaver` },
    `epic`,
    `farmer`,
    `bear`,
    `#8C5A32`,
    `#E8C49A`,
    { prod: 0.42 },
    { ru: `Строит темп производства`, en: `Builds the production pace` },
  ),
  k(
    `tuchka`,
    { ru: `Тучка`, en: `Tuchka` },
    `legendary`,
    `general`,
    `bird`,
    `#D7E6F5`,
    `#FFFFFF`,
    { income: 0.25, offline: 0.16 },
    {
      ru: `Доход и офлайн с облаков`,
      en: `Income and offline from the clouds`,
    },
  ),
  k(
    `yara`,
    { ru: `Феникс Яра`, en: `Yara the phoenix` },
    `legendary`,
    `farmer`,
    `bird`,
    `#FF7A59`,
    `#FFD15C`,
    { speed: 0.22, prod: 0.24 },
    {
      ru: `Всё вокруг вспыхивает темпом`,
      en: `Everything around picks up the pace`,
    },
  ),
  k(
    `iskra`,
    { ru: `Дракончик Искра`, en: `Iskra the dragon` },
    `legendary`,
    `general`,
    `bird`,
    `#FF8A3D`,
    `#FFE38A`,
    { income: 0.22, prod: 0.22 },
    {
      ru: `Маленький огонь, большой чек`,
      en: `A small flame and a big receipt`,
    },
  ),
  k(
    `myata`,
    { ru: `Единорог Мята`, en: `Myata the unicorn` },
    `legendary`,
    `cashier`,
    `goat`,
    `#F7F4FF`,
    `#E7D2FF`,
    { income: 0.2, lambda: 0.12 },
    { ru: `Гости идут на свет рога`, en: `Guests follow the horn's glow` },
  ),
  k(
    `osya`,
    { ru: `Осьминог Ося`, en: `Osya the octopus` },
    `legendary`,
    `carrier`,
    `crab`,
    `#8E6CFF`,
    `#E4D8FF`,
    { cap: 5, serve: 0.28 },
    { ru: `Хватает всё сразу`, en: `Grabs everything at once` },
  ),
  k(
    `nova`,
    { ru: `Звёздный енот Нова`, en: `Nova the star raccoon` },
    `legendary`,
    `general`,
    `raccoon`,
    `#C9A6FF`,
    `#FFF6C8`,
    { income: 0.3, speed: 0.16, prod: 0.16 },
    { ru: `Сезонный талисман гавани`, en: `The harbor's seasonal charm` },
  ),
];
function k(e, t, n, r, i, a, o, s, c) {
  return {
    id: e,
    name: t,
    rarity: n,
    role: r,
    look: i,
    color: a,
    accent: o,
    perk: s,
    blurb: c,
  };
}
function A(e) {
  return Le.find((t) => t.id === e);
}
var Re = [
    {
      id: `hat_straw`,
      slot: `hat`,
      cost: 50,
      name: { ru: `Соломенная шляпа`, en: `Straw hat` },
    },
    {
      id: `hat_sailor`,
      slot: `hat`,
      cost: 80,
      name: { ru: `Бескозырка`, en: `Sailor cap` },
    },
    {
      id: `hat_flower`,
      slot: `hat`,
      cost: 120,
      name: { ru: `Венок`, en: `Flower crown` },
    },
    {
      id: `trail_bubbles`,
      slot: `trail`,
      cost: 90,
      name: { ru: `Пузырьки`, en: `Bubbles` },
    },
    {
      id: `trail_stars`,
      slot: `trail`,
      cost: 160,
      name: { ru: `Звёздный след`, en: `Star trail` },
    },
    {
      id: `frame_wood`,
      slot: `frame`,
      cost: 70,
      name: { ru: `Деревянная рамка`, en: `Wooden frame` },
    },
    {
      id: `frame_gold`,
      slot: `frame`,
      cost: 240,
      name: { ru: `Золотая рамка`, en: `Gold frame` },
    },
    {
      id: `hat_crown`,
      slot: `hat`,
      cost: 400,
      name: { ru: `Корона гавани`, en: `Harbor crown` },
    },
  ],
  ze = [10, 25, 50, 90, 140, 200],
  j = [
    { kind: `coins`, weight: 28, label: { ru: `Монеты`, en: `Coins` } },
    {
      kind: `shells`,
      amount: 5,
      weight: 18,
      label: { ru: `5 ракушек`, en: `5 shells` },
    },
    {
      kind: `coins`,
      weight: 16,
      label: { ru: `Горсть монет`, en: `A handful` },
    },
    {
      kind: `shells`,
      amount: 12,
      weight: 12,
      label: { ru: `12 ракушек`, en: `12 shells` },
    },
    { kind: `key`, weight: 8, label: { ru: `Ключ`, en: `Key` } },
    { kind: `turbo`, weight: 8, label: { ru: `Турбо`, en: `Turbo` } },
    {
      kind: `shells`,
      amount: 20,
      weight: 6,
      label: { ru: `20 ракушек`, en: `20 shells` },
    },
    { kind: `jackpot`, weight: 4, label: { ru: `Джекпот`, en: `Jackpot` } },
  ],
  Be = [
    { kind: `coins`, amount: 200, label: { ru: `200 монет`, en: `200 coins` } },
    {
      kind: `shells`,
      amount: 10,
      label: { ru: `10 ракушек`, en: `10 shells` },
    },
    { kind: `key`, amount: 1, label: { ru: `Ключ`, en: `A key` } },
    {
      kind: `shells`,
      amount: 20,
      label: { ru: `20 ракушек`, en: `20 shells` },
    },
    {
      kind: `turbo`,
      amount: 1,
      label: { ru: `Турбо-талон`, en: `Turbo ticket` },
    },
    {
      kind: `shells`,
      amount: 30,
      label: { ru: `30 ракушек`, en: `30 shells` },
    },
    { kind: `helper`, label: { ru: `Редкий помощник`, en: `A rare helper` } },
  ],
  M =
    `Бухта Ухи.Причал Кита.Гавань Совы.Остров Пышек.Маяк Фенека.Река Сыра.Пляж Крабов.Сад Репы.Док Утки.Холм Мёда.Пирс Хрю.Залив Пирога.Коса Травни.Форт Варенья.Риф Кокоса.Склон Яблок.Фьорд Пломбира.Ярмарка Хлопка.Дом Бобра.Тихая Касса.Шумный Прилавок.Северная Сеть.Южный Лот.Енотовый Мыс.Звёздный Док.Лунная Печь.Тихий Улей.Быстрый Паром.Старая Верфь.Новая Верфь`.split(
      `.`,
    );
function Ve(e, t) {
  return t
    ? e === 30
      ? { kind: `helper`, amount: 1, rarity: `legendary` }
      : e === 15
        ? { kind: `helper`, amount: 1, rarity: `epic` }
        : e % 8 == 0
          ? {
              kind: `cosmetic`,
              amount: 1,
              cosmetic:
                e === 8
                  ? `hat_pirate`
                  : e === 16
                    ? `hat_winter`
                    : `trail_season`,
            }
          : e % 5 == 0
            ? { kind: `key`, amount: 1 }
            : { kind: `shells`, amount: 8 + e }
    : e === 30
      ? { kind: `helper`, amount: 1, rarity: `epic` }
      : e === 20 || e === 10
        ? { kind: `helper`, amount: 1, rarity: e === 20 ? `rare` : `common` }
        : e === 8
          ? { kind: `cosmetic`, amount: 1, cosmetic: `hat_bloom` }
          : e === 16
            ? { kind: `cosmetic`, amount: 1, cosmetic: `hat_space` }
            : e === 24
              ? { kind: `cosmetic`, amount: 1, cosmetic: `frame_album` }
              : e % 5 == 0
                ? { kind: `key`, amount: 1 }
                : { kind: `shells`, amount: 4 + Math.floor(e / 2) };
}
var N = { x: 3.15, z: 11.6 },
  P = { x: -1.15, z: 9.2 },
  He = { x: 0.9, z: 8.6 },
  F = { x: 0.2, z: 3.6 };
function Ue(e, t) {
  return S.P0 * S.priceIsland ** (e - 1) * (1 + S.priceStation * (t - 1));
}
function I(e, t) {
  return Math.max(1, Math.round(Ue(e, t)));
}
function L(e) {
  let t = Math.max(0, Math.min(S.tCapLevel, e));
  return S.t0 * S.tDecay ** +t;
}
function We(e, t = 0) {
  return Math.min(
    S.stackMax,
    Math.max(1, S.stackBase + S.stackPerLevel * e + t),
  );
}
function Ge(e, t) {
  return S.B0 * S.buildIsland ** (e - 1) * S.buildStation ** (t - 1);
}
function Ke(e, t) {
  return Math.max(1, Math.round(Ge(e, t)));
}
function qe(e, t, n) {
  return Ge(e, t) * S.upgradeFactor * S.upgradeGrowth ** +n;
}
function Je(e, t, n) {
  return Math.max(1, Math.round(qe(e, t, n)));
}
function Ye(e, t, n, r) {
  let i = L(n);
  return i <= 0 ? 0 : I(e, t) * (1 / i) * S.idleFactor * r;
}
function Xe(e, t) {
  return S.hireBase * S.hireIsland ** (e - 1) * S.hireIndex ** (t - 1);
}
function R(e, t) {
  return Math.max(1, Math.round(Xe(e, t)));
}
function Ze(e, t) {
  return S.lambdaBase + S.lambdaPerStall * e + S.lambdaPerDecor * t;
}
function Qe(e) {
  return Ke(e + 1, 1) * S.boatFactor;
}
function $e(e, t) {
  return Math.max(
    1,
    Math.round(
      S.decorBase * S.buildIsland ** (e - 1) * S.decorGrowth ** (t - 1),
    ),
  );
}
function et(e) {
  return Math.max(1, Math.round(S.lighthouseBase * S.lighthouseGrowth ** +e));
}
function tt(e) {
  return Math.max(
    1,
    Math.round(S.helperLevelBase * S.helperLevelGrowth ** +Math.max(0, e - 1)),
  );
}
function nt(e, t, n, r) {
  return r || t <= 0 || e <= 0 || n <= 0
    ? 0
    : e * Math.min(t, n) * S.offlineFactor;
}
function rt(e) {
  if (e < S.timerIsland) return 0;
  let t = 90 * 1.8 ** (e - S.timerIsland);
  return Math.min(1800, Math.round(t));
}
function it(e) {
  return 60 + 5 * (e + 1);
}
function at(e) {
  return Math.max(1, Math.ceil(e / S.shellSkipSeconds));
}
var ot = [0, 1, 8, 14, 17, 19, 19, 20, 19, 20, 19, 19, 12];
function st(e) {
  return ot[e] ?? 1;
}
function ct(e) {
  return Math.min(S.maxLevel, Math.max(10, st(e) + 3));
}
var z = class {
  s;
  constructor(e) {
    (this.s = e), Number.isFinite(this.s) || (this.s = 1);
  }
  next() {
    (this.s |= 0), (this.s = (this.s + 1831565813) | 0);
    let e = Math.imul(this.s ^ (this.s >>> 15), 1 | this.s);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  }
  int(e) {
    return e <= 1 ? 0 : Math.floor(this.next() * e);
  }
  pick(e) {
    return e[this.int(e.length)];
  }
  chance(e) {
    return this.next() < e;
  }
};
function lt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    (t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619));
  return t >>> 0;
}
function ut(e) {
  return lt(e).toString(16);
}
var dt = new Set([
    `raccoon_hero`,
    `helper_beaver`,
    `helper_otter`,
    `helper_squirrel`,
    `customer_bunny`,
    `customer_bear`,
    `customer_fox`,
    `customer_duck`,
    `customer_frog`,
    `customer_penguin`,
    `customer_pig`,
    `customer_sheep`,
    `animal_cow`,
  ]),
  ft = [`_plants`, `_apples`, `_cherries`, `_berries`],
  pt = {
    carrot: `station_carrot_bed`,
    cabbage: `station_cabbage_bed`,
    fish: `station_fishing_pier`,
    smoked: `station_smokehouse`,
    apple: `station_apple_tree`,
    juice: `station_juice_press`,
    pie: `station_pie_oven`,
    milk: `station_cow_pen`,
    cheese: `station_cheese_press`,
    honey: `station_beehive`,
    candle: `station_candle_maker`,
    wheat: `station_wheat_field`,
    flour: `station_windmill`,
    bread: `station_bakery_oven`,
    coffee: `station_coffee_bush`,
    cup: `station_coffee_machine`,
    berry: `station_berry_bush`,
    jam: `station_jam_cauldron`,
    snow: `station_freezer`,
    ice: `station_ice_cream_machine`,
    sorbet: `station_ice_cream_machine`,
    coconut: `station_coconut_palm`,
    cocktail: `station_cocktail_bar`,
    cotton: `station_cotton_candy`,
    ticket: `station_carousel`,
  };
function mt(e, t, n, r = 0) {
  return e === `stall`
    ? `stall`
    : e === `till`
      ? `till`
      : e === `house`
        ? `helper_house`
        : e === `hire`
          ? `signpost`
          : e === `backpack` || e === `build`
            ? `build_pad`
            : e === `delivery`
              ? `prop_delivery_boat`
              : e === `attraction`
                ? `station_ferris_wheel`
                : e === `decor`
                  ? ([
                      `bench`,
                      `flower_patch`,
                      `lamp_post`,
                      `flower_patch`,
                      `bench`,
                    ][r] ?? `bench`)
                  : (e === `producer` || e === `processor`) && t && pt[t]
                    ? pt[t]
                    : null;
}
function ht(e) {
  return (
    {
      bunny: `customer_bunny`,
      fox: `customer_fox`,
      cat: `customer_fox`,
      bear: `customer_bear`,
      bird: `customer_duck`,
      duck: `customer_duck`,
      owl: `customer_duck`,
      frog: `customer_frog`,
      penguin: `customer_penguin`,
      pig: `customer_pig`,
      sheep: `customer_sheep`,
      goat: `customer_sheep`,
      crab: `customer_frog`,
      capybara: `customer_bear`,
      raccoon: `raccoon_hero`,
    }[e] ?? null
  );
}
function gt(e, t) {
  return e === `lada` ||
    e === `osya` ||
    t === `bird` ||
    t === `owl` ||
    t === `crab` ||
    t === `penguin` ||
    t === `frog`
    ? `helper_otter`
    : e === `alisa` ||
        e === `kira` ||
        e === `fenya` ||
        t === `fox` ||
        t === `cat`
      ? `helper_squirrel`
      : `helper_beaver`;
}
function _t(e) {
  return (
    {
      carrot: `good_carrot`,
      cabbage: `good_cabbage`,
      fish: `good_fish`,
      smoked: `good_smoked_fish`,
      apple: `good_apple`,
      juice: `good_juice`,
      pie: `good_pie`,
      cheese: `good_cheese`,
      milk: `good_milk`,
      candle: `good_candle`,
      honey: `good_honey`,
      bread: `good_bread`,
      flour: `good_flour`,
      wheat: `good_wheat`,
      coffee: `good_coffee_beans`,
      cup: `good_coffee_cup`,
      berry: `good_berries`,
      jam: `good_jam`,
      ice: `good_ice_cream`,
      sorbet: `good_popsicle`,
      coconut: `good_coconut`,
      cocktail: `good_cocktail`,
      cotton: `good_cotton_candy`,
      ticket: `good_ticket`,
      starfruit: `good_star_trophy`,
      mooncake: `good_gift_box`,
      tea: `good_coffee_cup`,
    }[e] ?? null
  );
}
function Tt(e, t, n) {
  let r = ``,
    i = 1.2;
  for (let a of e.def.stations) {
    let e = Math.hypot(a.x - t, a.z - n);
    e < i && ((i = e), (r = a.id));
  }
  return r || null;
}
var Et = __lz,
  Dt = [
    {
      id: `first_carrot`,
      group: `sales`,
      shells: 5,
      name: { ru: `Первая морковка`, en: `First carrot` },
      desc: { ru: `Продай 1 товар`, en: `Sell 1 item` },
      test: (e) => e.sales >= 1,
    },
    {
      id: `business`,
      group: `sales`,
      shells: 5,
      name: { ru: `Бизнес-енот`, en: `Business raccoon` },
      desc: { ru: `Заработай 1 000 монет`, en: `Earn 1,000 coins` },
      test: (e) => e.earned >= 1e3,
    },
    {
      id: `thousand`,
      group: `sales`,
      shells: 15,
      name: { ru: `Тысячник`, en: `Thousandaire` },
      desc: { ru: `Продай 1 000 товаров`, en: `Sell 1,000 items` },
      test: (e) => e.sales >= 1e3,
    },
    {
      id: `ten_thousand`,
      group: `sales`,
      shells: 30,
      name: { ru: `Десятитысячник`, en: `Ten thousand deals` },
      desc: { ru: `Продай 10 000 товаров`, en: `Sell 10,000 items` },
      test: (e) => e.sales >= 1e4,
    },
    {
      id: `hundred_thousand`,
      group: `sales`,
      shells: 80,
      name: { ru: `Сто тысяч сделок`, en: `A hundred thousand` },
      desc: { ru: `Продай 100 000 товаров`, en: `Sell 100,000 items` },
      test: (e) => e.sales >= 1e5,
    },
    {
      id: `wolf`,
      group: `islands`,
      shells: 10,
      name: { ru: `Морской волк`, en: `Sea wolf` },
      desc: { ru: `Открой остров 2`, en: `Unlock island 2` },
      test: (e) => e.highestIsland >= 2,
    },
    {
      id: `captain`,
      group: `islands`,
      shells: 30,
      name: { ru: `Капитан`, en: `Captain` },
      desc: { ru: `Открой остров 6`, en: `Unlock island 6` },
      test: (e) => e.highestIsland >= 6,
    },
    {
      id: `admiral`,
      group: `islands`,
      shells: 100,
      name: { ru: `Адмирал`, en: `Admiral` },
      desc: { ru: `Открой остров 12`, en: `Unlock island 12` },
      test: (e) => e.highestIsland >= 12,
    },
    {
      id: `star`,
      group: `islands`,
      shells: 15,
      name: { ru: `Звёздочка`, en: `Little star` },
      desc: { ru: `Получи первую ⭐⭐⭐`, en: `Earn a first 3-star island` },
      test: (e) => e.stars3 >= 1,
    },
    {
      id: `constellation`,
      group: `islands`,
      shells: 60,
      name: { ru: `Созвездие`, en: `Constellation` },
      desc: { ru: `⭐⭐⭐ на 6 островах`, en: `3 stars on 6 islands` },
      test: (e) => e.stars3 >= 6,
    },
    {
      id: `sky`,
      group: `islands`,
      shells: 150,
      name: { ru: `Небосвод`, en: `Night sky` },
      desc: { ru: `⭐⭐⭐ на всех 12`, en: `3 stars on all 12` },
      test: (e) => e.stars3 >= 12,
    },
    {
      id: `first_hire`,
      group: `crew`,
      shells: 5,
      name: { ru: `Первый найм`, en: `First hire` },
      desc: { ru: `Найми помощника`, en: `Hire a helper` },
      test: (e) => e.hires >= 1,
    },
    {
      id: `team`,
      group: `crew`,
      shells: 20,
      name: { ru: `Дружная команда`, en: `A full crew` },
      desc: { ru: `10 помощников одновременно`, en: `10 helpers at once` },
      test: (e) => e.crew >= 10,
    },
    {
      id: `legend_crew`,
      group: `crew`,
      shells: 50,
      name: { ru: `Звёздный состав`, en: `Star lineup` },
      desc: {
        ru: `Получи легендарного помощника`,
        en: `Own a legendary helper`,
      },
      test: (e) => e.legendary,
    },
    {
      id: `trainer`,
      group: `crew`,
      shells: 25,
      name: { ru: `Тренер`, en: `Coach` },
      desc: { ru: `Помощник 10 уровня`, en: `A helper reaches level 10` },
      test: (e) => e.helperLevel >= 10,
    },
    {
      id: `master_station`,
      group: `world`,
      shells: 20,
      name: { ru: `Мастер-станция`, en: `Master station` },
      desc: { ru: `Станция 25 уровня`, en: `A station reaches level 25` },
      test: (e) => e.stationLevel >= 25,
    },
    {
      id: `industrial`,
      group: `world`,
      shells: 40,
      name: { ru: `Индустриализация`, en: `Industrialised` },
      desc: { ru: `Построй 50 станций`, en: `Build 50 stations` },
      test: (e) => e.stationsBuilt >= 50,
    },
    {
      id: `heavy`,
      group: `world`,
      shells: 15,
      name: { ru: `Тяжеловес`, en: `Heavy lifter` },
      desc: { ru: `Стек на 20 предметов`, en: `Carry a stack of 20` },
      test: (e) => e.stackCap >= 20,
    },
    {
      id: `early_bird`,
      group: `habits`,
      shells: 20,
      name: { ru: `Ранняя пташка`, en: `Early bird` },
      desc: { ru: `Зайди 7 дней подряд`, en: `Log in 7 days in a row` },
      test: (e) => e.streak >= 7,
    },
    {
      id: `regular`,
      group: `habits`,
      shells: 50,
      name: { ru: `Завсегдатай`, en: `Regular` },
      desc: { ru: `Зайди 30 дней`, en: `Log in on 30 days` },
      test: (e) => e.loginDays >= 30,
    },
    {
      id: `veteran`,
      group: `habits`,
      shells: 150,
      name: { ru: `Ветеран Гавани`, en: `Harbor veteran` },
      desc: { ru: `Зайди 90 дней`, en: `Log in on 90 days` },
      test: (e) => e.loginDays >= 90,
    },
    {
      id: `executive`,
      group: `habits`,
      shells: 30,
      name: { ru: `Исполнительный`, en: `Doer` },
      desc: { ru: `50 ежедневных заданий`, en: `Finish 50 daily quests` },
      test: (e) => e.dailyDone >= 50,
    },
    {
      id: `workaholic`,
      group: `habits`,
      shells: 60,
      name: { ru: `Трудоголик`, en: `Workaholic` },
      desc: { ru: `20 недельных наборов`, en: `Finish 20 weekly sets` },
      test: (e) => e.weeklySets >= 20,
    },
    {
      id: `festival`,
      group: `habits`,
      shells: 10,
      name: { ru: `Фестивальщик`, en: `Festival goer` },
      desc: { ru: `Поучаствуй в событии`, en: `Join an event` },
      test: (e) => e.eventsJoined >= 1,
    },
    {
      id: `race_king`,
      group: `habits`,
      shells: 40,
      name: { ru: `Король ярмарки`, en: `Fair king` },
      desc: { ru: `1-е место в гонке лодок`, en: `Finish 1st in a boat race` },
      test: (e) => e.boatRaceWins >= 1,
    },
    {
      id: `collector`,
      group: `world`,
      shells: 15,
      name: { ru: `Коллекционер`, en: `Collector` },
      desc: { ru: `Собери 1 коллекцию`, en: `Complete 1 collection` },
      test: (e) => e.sets >= 1,
    },
    {
      id: `museum`,
      group: `world`,
      shells: 120,
      name: { ru: `Музей`, en: `Museum` },
      desc: {
        ru: `Собери все 12 коллекций`,
        en: `Complete all 12 collections`,
      },
      test: (e) => e.sets >= 12,
    },
    {
      id: `lighthouse_20`,
      group: `world`,
      shells: 40,
      name: { ru: `Маячник`, en: `Keeper` },
      desc: { ru: `Открой 20 узлов Маяка`, en: `Unlock 20 Lighthouse nodes` },
      test: (e) => e.lighthouse >= 20,
    },
    {
      id: `lighthouse_40`,
      group: `world`,
      shells: 120,
      name: { ru: `Светоч`, en: `Beacon` },
      desc: { ru: `Все 40 узлов Маяка`, en: `Unlock all 40 nodes` },
      test: (e) => e.lighthouse >= 40,
    },
    {
      id: `fashion`,
      group: `world`,
      shells: 25,
      name: { ru: `Модник`, en: `Dressed up` },
      desc: { ru: `10 предметов косметики`, en: `Own 10 cosmetics` },
      test: (e) => e.cosmetics >= 10,
    },
    {
      id: `designer`,
      group: `world`,
      shells: 30,
      name: { ru: `Дизайнер`, en: `Designer` },
      desc: { ru: `Поставь 50 украшений`, en: `Place 50 decorations` },
      test: (e) => e.decor >= 50,
    },
    {
      id: `queue`,
      group: `sales`,
      shells: 10,
      name: { ru: `Очередь до горизонта`, en: `Queue to the horizon` },
      desc: {
        ru: `15 покупателей в очереди`,
        en: `15 customers waiting at once`,
      },
      test: (e) => e.bestQueue >= 15,
    },
    {
      id: `sprinter`,
      group: `sales`,
      shells: 25,
      name: { ru: `Спринтер`, en: `Sprinter` },
      desc: {
        ru: `100 покупателей за 5 минут`,
        en: `Serve 100 customers in 5 minutes`,
      },
      test: (e) => e.sprint,
    },
    {
      id: `night_watch`,
      group: `habits`,
      shells: 15,
      name: { ru: `Ночной сторож`, en: `Night watch` },
      desc: {
        ru: `Собери офлайн за полные 8 часов`,
        en: `Collect an 8-hour offline cap`,
      },
      test: (e) => e.nightWatch,
    },
    {
      id: `rebirth`,
      group: `islands`,
      shells: 40,
      name: { ru: `Возрождение`, en: `Rebirth` },
      desc: {
        ru: `Первый фестиваль престижа`,
        en: `Hold a first prestige festival`,
      },
      test: (e) => e.prestiges >= 1,
    },
    {
      id: `eternal`,
      group: `islands`,
      shells: 100,
      name: { ru: `Вечный праздник`, en: `Eternal fair` },
      desc: { ru: `10 престижей`, en: `10 prestiges` },
      test: (e) => e.prestiges >= 10,
    },
    {
      id: `vip`,
      group: `sales`,
      shells: 40,
      name: { ru: `VIP-сервис`, en: `VIP service` },
      desc: { ru: `100 заказов VIP`, en: `Complete 100 VIP orders` },
      test: (e) => e.vip >= 100,
    },
    {
      id: `lucky`,
      group: `habits`,
      shells: 15,
      name: { ru: `Удачливый`, en: `Lucky` },
      desc: { ru: `Джекпот колеса`, en: `Hit the wheel jackpot` },
      test: (e) => e.jackpot,
    },
    {
      id: `expeditor`,
      group: `world`,
      shells: 30,
      name: { ru: `Экспедитор`, en: `Expeditor` },
      desc: { ru: `50 экспедиций`, en: `Finish 50 expeditions` },
      test: (e) => e.expeditions >= 50,
    },
    {
      id: `season`,
      group: `habits`,
      shells: 50,
      name: { ru: `Сезонник`, en: `Seasoned` },
      desc: { ru: `Пройди сезон до 30 уровня`, en: `Reach pass level 30` },
      test: (e) => e.passLevel >= 30,
    },
    {
      id: `fisher`,
      group: `world`,
      shells: 25,
      name: { ru: `Рыболов`, en: `Angler` },
      desc: { ru: `Поймай легендарную рыбу`, en: `Catch a legendary fish` },
      test: (e) => e.legendaryFish,
    },
    {
      id: `magnate`,
      group: `islands`,
      shells: 200,
      name: { ru: `Енот-магнат`, en: `Raccoon magnate` },
      desc: {
        ru: `Заверши финальный заказ архипелага`,
        en: `Finish the archipelago's final order`,
      },
      test: (e) => e.magnate,
    },
  ],
  B = {
    Move: 0,
    Pick: 1,
    Drop: 2,
    Till: 3,
    Build: 4,
    Stall2: 5,
    Hire: 6,
    Chest: 7,
    Turbo: 8,
    Free: 9,
    Quests: 10,
    Done: 11,
  },
  Ot = null;
function V(e) {
  let t = new Date(e);
  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
}
function kt(e) {
  let t = new Date(e),
    n = (t.getDay() + 6) % 7,
    r = new Date(t);
  return r.setDate(t.getDate() - n), r.setHours(0, 0, 0, 0), V(r.getTime());
}
function At(e) {
  return Math.max(0, Math.floor((e - Date.UTC(2026, 0, 5)) / 24192e5));
}
function jt(e) {
  let t = new Date(e).getHours();
  return S.happyHours.includes(t);
}
function H(e) {
  if (Ot === `off`) return null;
  let t = new Date(e),
    n = (t.getUTCDay() - 5 + 7) % 7,
    r = Date.UTC(
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate() - n,
      7,
      0,
      0,
      0,
    );
  e < r && (r -= 6048e5);
  let i = r + 2592e5;
  if (e < r || e >= i) return null;
  let a =
    E[(((Math.floor(r / 6048e5) % E.length) % E.length) + E.length) % E.length];
  return { def: a, key: `${a.id}:${r}`, start: r, end: i };
}
function Mt(e) {
  H(e);
  let t = new Date(e),
    n = (5 - t.getUTCDay() + 7) % 7,
    r = Date.UTC(
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate() + n,
      7,
      0,
      0,
      0,
    );
  return r <= e && (r += 6048e5), r;
}
function Nt(e, t) {
  return {
    built: e,
    level: 1,
    progress: 0,
    stock: e && t ? 6 : 0,
    inputStock: 0,
    invested: 0,
    timer: 0,
    timerTotal: 0,
    pending: null,
  };
}
function Pt(e = Date.now()) {
  let t = D.map((e) => {
      let t = {};
      for (let n of e.stations) {
        let e = n.kind === `producer` || n.kind === `processor`;
        t[n.id] = Nt(n.built, e);
      }
      return {
        id: e.id,
        unlocked: e.id === 1,
        coins: 0,
        stations: t,
        crew: [],
        prestige: 0,
        mayorClaimed: [],
        mayorProgress: {},
        playtime: 0,
        pendingOffline: 0,
        lifetimeEarned: 0,
        sales: {},
        celebrated: 0,
        decorColors: {},
      };
    }),
    n = {
      v: 1,
      t: e,
      profile: {
        name: `Енот`,
        createdAt: e,
        lastSeen: e,
        totalPlaytime: 0,
        sessions: 1,
        shells: 0,
        keys: 0,
        turboTickets: 0,
        currentIsland: 1,
        tutorialStep: B.Move,
        backpack: 0,
        playerX: F.x,
        playerZ: F.z,
        playerYaw: Math.PI,
        turboUntil: 0,
        internUntil: 0,
        freeInternAt: 0,
        welcomeShown: 0,
        nightWatch: !1,
        sprint: !1,
        magnate: !1,
        raceClaimedWeek: ``,
        eventJoinedWeek: ``,
      },
      islands: t,
      lighthouse: [],
      helpers: [`stepa`, `alisa`, `misha`, `krya`].map((e) => ({
        id: e,
        level: 1,
        islandId: null,
      })),
      quests: {
        day: ``,
        daily: [],
        dailyBonusClaimed: !1,
        week: ``,
        weekly: [],
        weeklyBonusClaimed: !1,
      },
      pass: {
        season: At(e),
        xp: 0,
        level: 0,
        claimed: [],
        starClaimed: [],
        starTokens: 0,
        starUnlocked: !1,
        overflowChests: 0,
      },
      events: {
        weekKey: ``,
        tickets: 0,
        progress: 0,
        claimedTiers: [],
        raceScore: 0,
        fishingBest: 0,
      },
      achievements: [],
      collections: [],
      expeditions: [],
      cosmetics: [],
      equipped: { hat: null, trail: null, frame: null },
      settings: { lang: `ru`, music: !0, sfx: !0, quality: `auto` },
      ads: {
        day: V(e),
        midgamesToday: 0,
        midgamesHour: 0,
        hourStamp: e,
        rewarded: {},
        lastMidgameAt: 0,
        lastRewardedAt: 0,
      },
      stats: {
        sales: 0,
        customers: 0,
        earned: 0,
        hires: 0,
        upgrades: 0,
        stationsBuilt: 0,
        chests: 0,
        expeditions: 0,
        prestiges: 0,
        dailyDone: 0,
        weeklySets: 0,
        eventsJoined: 0,
        boatRaceWins: 0,
        decorPlaced: 0,
        bestQueue: 0,
        loginDays: 1,
        loginStreak: 1,
        lastLoginDay: V(e),
        vipDone: 0,
        wheelJackpot: !1,
        legendaryFish: !1,
        seasonMaxLevel: 0,
        weekCoins: 0,
        weekKey: kt(e),
        serveTimes: [],
        shellsEarned: 0,
      },
      wheel: { day: V(e), freeUsed: !1, adUsed: 0 },
      chest: { nextAt: e + S.chestPeriod * 1e3, spawned: !1, openedOnce: !1 },
      login: { cycle: 0, lastClaimDay: ``, albumDay: 0, albumClaimed: [] },
      vip: null,
    };
  return Kt(n, e), n;
}
function U(e, t) {
  let n = O(t),
    r = e.islands[t - 1];
  if (
    !r ||
    !n.stations.filter((e) => e.star).every((e) => r.stations[e.id]?.built)
  )
    return 0;
  let i = n.stations.filter((e) => e.scale),
    a = st(t);
  if (!i.every((e) => (r.stations[e.id]?.level ?? 1) >= a)) return 0;
  let o = ct(t),
    s = i.every((e) => (r.stations[e.id]?.level ?? 1) >= o),
    c = n.mayor.every((e) => r.mayorClaimed.includes(e.id));
  return s && c ? 3 : s ? 2 : 1;
}
function Ft(e, t = 2) {
  let n = e.profile.currentIsland,
    r = O(n),
    i = e.islands[n - 1];
  if (!i) return [];
  let a = st(n),
    o = [];
  for (let t of r.stations) {
    if (!t.star && !t.scale) continue;
    let n = i.stations[t.id];
    n &&
      (t.star && !n.built && t.kind !== `hire`
        ? o.push({
            stationId: t.id,
            x: t.x,
            z: t.z,
            cost: X(e, r, t).cost,
            kind: `build`,
            level: 1,
          })
        : t.scale &&
          n.built &&
          n.level < a &&
          o.push({
            stationId: t.id,
            x: t.x,
            z: t.z,
            cost: X(e, r, t).cost,
            kind: `upgrade`,
            level: n.level + 1,
          }));
  }
  return o.sort((e, t) => e.cost - t.cost), o.slice(0, t);
}
function W(e) {
  let t = 1;
  for (let n of e.islands) n.unlocked && (t = Math.max(t, n.id));
  return t;
}
function It(e, t) {
  let n = e.islands[t - 1];
  return n
    ? 1 + (n.stations.house?.built ? 2 : 0) + Math.min(2, n.prestige)
    : 1;
}
function Lt(e) {
  let t = 0;
  for (let n of D) n.cards.every((t) => e.collections.includes(t.id)) && t++;
  return t;
}
function Rt(e, t) {
  return e.lighthouse.filter((e) => Math.floor(e / 10) === t).length;
}
function zt(e) {
  let t = Rt(e, 1),
    n = S.offlineCapSteps;
  return (n[Math.min(t, n.length - 1)] ?? 2) * 3600;
}
function G(e, t, n) {
  let r = e.islands[t - 1],
    i = Rt(e, 0),
    a = e.lighthouse.filter((e) => Math.floor(e / 10) === 2),
    o = Rt(e, 3),
    s = 0,
    c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = 0,
    p = 0,
    m = 0,
    h = 0,
    g = 0;
  if (r)
    for (let t of r.crew) {
      let n = e.helpers.find((e) => e.id === t),
        r = A(t);
      if (!n || !r) continue;
      let i = 1 + S.helperIncomeLevel * (n.level - 1),
        a = r.perk;
      (s += (a.income ?? 0) * i),
        (c += (a.speed ?? 0) * i),
        (l += Math.round((a.cap ?? 0) * i)),
        (u += (a.offline ?? 0) * i),
        (d += (a.lambda ?? 0) * i),
        (f += (a.prod ?? 0) * i),
        (p += (a.serve ?? 0) * i),
        r.role === `cashier`
          ? m++
          : r.role === `carrier`
            ? h++
            : r.role === `farmer`
              ? g++
              : (d += 0.04 * i);
    }
  n < e.profile.internUntil &&
    (m === 0 && (m = 1), h === 0 && (h = 1), (f += 0.12));
  for (let e of a) {
    let t = e % 10;
    (t === 3 || t === 6 || t === 9) && (l += 1);
  }
  let _ = r ? 1 + S.prestigeBonus * r.prestige : 1,
    v = 1 + S.collectionBonus * Lt(e),
    y = 1 + 0.05 * i,
    b = H(n) ? S.festivalIncome : 1,
    x = 1 + s,
    ee = 1 + u,
    te = _ * v * y * b * x * ee,
    ne = n < e.profile.turboUntil ? 2 : 1,
    re = jt(n) ? 2 : 1,
    ie =
      e.profile.tutorialStep < B.Hire &&
      e.profile.totalPlaytime < S.tutorialWindow;
  return {
    M: te,
    active: te * ne * re,
    speed: (1 + 0.03 * a.length) * (1 + c),
    capBonus: l,
    lambda: (1 + 0.03 * o) * (1 + d) * (ie ? S.tutorialLambda : 1),
    prod: (1 + f) * (g > 0 ? 1 + 0.2 * g : 1),
    serve: 1 / (1 + p),
    offlineCap: zt(e),
    cashiers: m,
    carriers: h,
    farmers: g,
  };
}
function Bt(e, t) {
  return We(e.profile.backpack, t.capBonus);
}
function Vt(e, t, n) {
  let r = e.islands[t - 1],
    i = O(t);
  if (!r?.unlocked) return 0;
  let a = G(e, t, n),
    o = r.crew.length + +(n < e.profile.internUntil);
  if (o <= 0) return 0;
  let s = 0;
  for (let e of i.stations) {
    if (e.kind !== `producer` && e.kind !== `processor`) continue;
    let n = r.stations[e.id];
    if (!n?.built) continue;
    let o = (e.item ? Ie(i, e.item) : void 0)?.k ?? e.k;
    s += Ye(t, o, n.level, a.M) * a.prod;
  }
  return (s *= 1 + 0.15 * Math.max(0, o - 1)), s;
}
function Ht(e, t, n) {
  let r = O(t),
    i = e.islands[t - 1];
  if (!i) return 0;
  let a = G(e, t, n),
    o = 0,
    s = 0,
    c = [];
  for (let e of r.stations) {
    let n = i.stations[e.id];
    if (
      n?.built &&
      ((e.kind === `producer` || e.kind === `processor`) &&
        (o += (1 / L(n.level)) * a.prod),
      e.kind === `stall` && e.item)
    ) {
      s++;
      let n = Ie(r, e.item);
      c.push(I(t, n?.k ?? 1));
    }
  }
  if (!c.length || o <= 0) return 0.2;
  let l = Ze(s, Ut(i)) * a.lambda,
    u = c.reduce((e, t) => e + t, 0) / c.length,
    d = a.cashiers > 0 ? 1 : 0.62,
    f = a.carriers > 0 ? 1 : 0.8;
  return Math.min(o, l) * u * d * f * a.active;
}
function Ut(e) {
  return Object.entries(e.stations).filter(
    ([e, t]) => e.startsWith(`decor_`) && t.built,
  ).length;
}
function Wt(e, t, n) {
  let r = n ?? t,
    i = e.profile.lastSeen || r,
    a = (r - i) / 1e3,
    o = a < -30;
  (o || a < 0) && (a = 0);
  let s = zt(e),
    c = [];
  for (let t of D) {
    let n = e.islands[t.id - 1];
    if (!n.unlocked) continue;
    let i = nt(Vt(e, t.id, r), a, s, o);
    i > 0 &&
      ((n.pendingOffline += i),
      c.push({ islandId: t.id, coins: i, seconds: Math.min(a, s) }));
  }
  let l = a > 259200 && e.profile.welcomeShown < i;
  return (
    l &&
      ((e.profile.shells += 30),
      (e.profile.turboTickets += 1),
      (e.stats.shellsEarned += 30),
      (e.profile.welcomeShown = r)),
    a >= s && s >= 28799 && (e.profile.nightWatch = !0),
    (e.profile.lastSeen = r),
    { seconds: a, rolledBack: o, lines: c, welcome: l, cap: s }
  );
}
function Gt(e, t) {
  let n = 0;
  for (let r of e.islands) {
    let e = r.pendingOffline * (t ? 2 : 1);
    e <= 0 ||
      ((r.coins += e),
      (r.lifetimeEarned += e),
      (r.pendingOffline = 0),
      (n += e));
  }
  return (e.stats.earned += n), (e.stats.weekCoins += n), n;
}
function Kt(e, t) {
  let n = V(t),
    r = kt(t);
  if (e.stats.lastLoginDay !== n) {
    let t = new Date(e.stats.lastLoginDay),
      r = (new Date(n).getTime() - t.getTime()) / 864e5;
    (e.stats.loginDays += 1),
      (e.stats.loginStreak = r > 0 && r < 2.5 ? e.stats.loginStreak + 1 : 1),
      (e.stats.lastLoginDay = n);
  }
  e.ads.day !== n &&
    ((e.ads.day = n),
    (e.ads.midgamesToday = 0),
    (e.ads.rewarded = {}),
    (e.wheel.day = n),
    (e.wheel.freeUsed = !1),
    (e.wheel.adUsed = 0)),
    e.quests.day !== n &&
      ((e.quests.day = n),
      (e.quests.daily = Jt(e, t)),
      (e.quests.dailyBonusClaimed = !1)),
    e.quests.week !== r &&
      ((e.quests.week = r),
      (e.quests.weekly = Yt(e)),
      (e.quests.weeklyBonusClaimed = !1),
      (e.stats.weekKey = r),
      (e.stats.weekCoins = 0));
  let i = H(t)?.key ?? ``;
  if (e.events.weekKey !== i) {
    if (e.events.tickets >= 10) {
      let t = Math.floor(e.events.tickets / S.eventTicketToShells);
      (e.profile.shells += t), (e.stats.shellsEarned += t);
    }
    e.events = {
      weekKey: i,
      tickets: 0,
      progress: 0,
      claimedTiers: [],
      raceScore: 0,
      fishingBest: e.events.fishingBest,
    };
  }
  let a = At(t);
  e.pass.season !== a &&
    (e.pass = {
      season: a,
      xp: 0,
      level: 0,
      claimed: [],
      starClaimed: [],
      starTokens: e.pass.starTokens,
      starUnlocked: !1,
      overflowChests: 0,
    });
  for (let t of e.expeditions) !t.claimed && t.endsAt;
}
function K(e) {
  return new z(lt(e) || 1);
}
var qt = [
  { id: `sell`, type: `sell`, base: 18 },
  { id: `serve`, type: `serve`, base: 16 },
  { id: `upgrade`, type: `upgrade`, base: 2 },
  { id: `earn`, type: `earn`, base: 80 },
  { id: `chest`, type: `chest`, base: 1 },
  { id: `hire`, type: `hire`, base: 1 },
  { id: `play`, type: `playtime`, base: 8 },
  { id: `offline`, type: `offline`, base: 1 },
  { id: `decor`, type: `decor`, base: 1 },
];
function Jt(e, t) {
  let n = K(`daily` + V(t) + e.profile.createdAt),
    r = W(e),
    i = [...qt],
    a = [];
  for (; a.length < 3 && i.length; ) {
    let e = n.int(i.length),
      t = i.splice(e, 1)[0],
      o = t.base;
    t.type === `sell` && (o = 12 + r * 8),
      t.type === `serve` && (o = 10 + r * 6),
      t.type === `earn` && (o = Math.round(I(r, 1) * (40 + r * 20))),
      t.type === `playtime` && (o = 8),
      a.push({
        template: t.id,
        type: t.type,
        target: o,
        progress: 0,
        claimed: !1,
      });
  }
  return a;
}
function Yt(e) {
  let t = W(e);
  return [
    {
      template: `w_sell`,
      type: `sell`,
      target: 200 * t,
      progress: 0,
      claimed: !1,
    },
    {
      template: `w_earn`,
      type: `earn`,
      target: Math.round(I(t, 1) * 500),
      progress: 0,
      claimed: !1,
    },
    { template: `w_daily`, type: `daily`, target: 8, progress: 0, claimed: !1 },
    { template: `w_up`, type: `upgrade`, target: 8, progress: 0, claimed: !1 },
    { template: `w_chest`, type: `chest`, target: 3, progress: 0, claimed: !1 },
    {
      template: `w_exp`,
      type: `expedition`,
      target: 1,
      progress: 0,
      claimed: !1,
    },
    { template: `w_card`, type: `card`, target: 1, progress: 0, claimed: !1 },
  ];
}
function q(e, t, n) {
  let r = [],
    i = (e, n) => {
      e.claimed ||
        ((e.type === `sell` && t.type === `sale`) ||
        (e.type === `sell_item` && t.type === `sale` && e.item === t.item) ||
        (e.type === `serve` && t.type === `serve`)
          ? (e.progress += n)
          : e.type === `upgrade` && t.type === `upgrade`
            ? (e.progress += 1)
            : e.type === `earn` && t.type === `sale`
              ? (e.progress += t.coins)
              : (e.type === `chest` && t.type === `chest`) ||
                  (e.type === `hire` &&
                    (t.type === `hire` || t.type === `helperlevel`))
                ? (e.progress += 1)
                : e.type === `playtime` && t.type === `play`
                  ? (e.progress += t.dt / 60)
                  : (e.type === `offline` && t.type === `offline`) ||
                      (e.type === `minigame` && t.type === `minigame`) ||
                      (e.type === `vip` && t.type === `vip`) ||
                      (e.type === `decor` && t.type === `decor`) ||
                      (e.type === `build` && t.type === `build`) ||
                      (e.type === `expedition` && t.type === `expedition`) ||
                      (e.type === `card` && t.type === `card`)
                    ? (e.progress += 1)
                    : e.type === `daily` &&
                      t.type === `sale` &&
                      (e.progress += 0));
    };
  if (t.type === `sale`) {
    (e.stats.sales += 1), (e.stats.customers += 0);
    let i = e.islands[t.island - 1];
    i &&
      ((i.sales[t.item] = (i.sales[t.item] ?? 0) + 1),
      Object.values(i.sales).reduce((e, t) => e + t, 0) >= 30 &&
        Zt(e, t.island, `sell`, r),
      i.playtime >= 180 && Zt(e, t.island, `play`, r)),
      e.stats.sales % 10 == 0 && $t(e, 1),
      H(n) &&
        ((e.events.tickets += 1),
        (e.events.progress += 1),
        (e.events.raceScore += t.coins)),
      e.vip &&
        n < e.vip.expires &&
        e.vip.item === t.item &&
        e.profile.currentIsland >= 7 &&
        (e.vip.have += 1);
  }
  if (t.type === `serve`) {
    (e.stats.customers += t.n),
      (e.stats.bestQueue = Math.max(e.stats.bestQueue, t.queue)),
      e.stats.serveTimes.push(n);
    let r = n - 3e5;
    (e.stats.serveTimes = e.stats.serveTimes.filter((e) => e >= r).slice(-130)),
      e.stats.serveTimes.length >= 100 && (e.profile.sprint = !0);
  }
  if (t.type === `build`) {
    e.stats.stationsBuilt += 1;
    let n = e.islands[t.island - 1];
    n && n.stations[t.station]?.built;
  }
  if (
    (t.type === `upgrade` && (e.stats.upgrades += 1),
    t.type === `hire` && (e.stats.hires += 1),
    t.type === `decor` && (e.stats.decorPlaced += 1),
    t.type === `play`)
  ) {
    let n = e.islands[t.island - 1];
    n &&
      ((n.playtime += t.dt), n.playtime >= 180 && Zt(e, t.island, `play`, r));
  }
  for (let n of e.quests.daily)
    i(
      n,
      (t.type === `sale` || t.type === `serve`) && t.type === `serve` ? t.n : 1,
    );
  for (let n of e.quests.weekly)
    i(n, t.type === `sale` ? 1 : t.type === `serve` ? t.n : 1);
  (t.type === `sale` ||
    t.type === `serve` ||
    t.type === `build` ||
    t.type === `upgrade` ||
    t.type === `hire` ||
    t.type === `decor`) &&
    Xt(e, t, r);
  let a =
    t.type === `build` || t.type === `upgrade`
      ? U(e, `island` in t ? t.island : e.profile.currentIsland)
      : null;
  if ((r.push(...J(e)), a !== null && `island` in t)) {
    let n = U(e, t.island);
    n > a &&
      (r.push({ kind: `star`, island: t.island, stars: n }),
      t.island === 12 && n === 3 && (e.profile.magnate = !0));
  }
  return r;
}
function Xt(e, t, n) {
  if (!(`island` in t)) return;
  let r = O(t.island),
    i = e.islands[t.island - 1];
  if (i)
    for (let a of r.mayor) {
      if (i.mayorClaimed.includes(a.id)) continue;
      let o = 0;
      a.type === `sell` && t.type === `sale` && (o = 1),
        a.type === `sell_item` &&
          t.type === `sale` &&
          a.item === t.item &&
          (o = 1),
        a.type === `serve` && t.type === `serve` && (o = t.n),
        a.type !== `build` ||
          t.type !== `build` ||
          (a.stationId && a.stationId !== t.station) ||
          (o = 1),
        a.type === `hire` && t.type === `hire` && (o = 1),
        a.type === `upgrade` && t.type === `upgrade` && (o = 1),
        a.type === `decor` && t.type === `decor` && (o = 1),
        a.type === `earn` && t.type === `sale` && (o = t.coins),
        o &&
          ((i.mayorProgress[a.id] = (i.mayorProgress[a.id] ?? 0) + o),
          i.mayorProgress[a.id] >= a.count &&
            (i.mayorClaimed.push(a.id),
            (e.profile.shells += 3),
            (e.stats.shellsEarned += 3),
            n.push({ kind: `mayor`, id: a.id, island: t.island }),
            r.mayor.every((e) => i.mayorClaimed.includes(e.id)) &&
              Zt(e, t.island, `mayor`, n)));
    }
}
function Zt(e, t, n, r) {
  let i = `${t}:${n}`;
  e.collections.includes(i) ||
    (O(t).cards.some((e) => e.id === i) &&
      (e.collections.push(i),
      r.push({ kind: `card`, id: i }),
      q(e, { type: `card` }, Date.now())));
}
function Qt(e) {
  let t = 1,
    n = 0;
  for (let r of e.islands) {
    n += r.crew.length;
    for (let e of Object.values(r.stations)) t = Math.max(t, e.level);
  }
  let r = 1,
    i = !1;
  for (let t of e.helpers)
    (r = Math.max(r, t.level)), A(t.id)?.rarity === `legendary` && (i = !0);
  let a = 0;
  for (let t of D) U(e, t.id) >= 3 && a++;
  return {
    sales: e.stats.sales,
    earned: e.stats.earned,
    highestIsland: W(e),
    stars3: a,
    crew: n,
    hires: e.stats.hires,
    legendary: i,
    helperLevel: r,
    stationLevel: t,
    stationsBuilt: e.stats.stationsBuilt,
    stackCap: We(e.profile.backpack, 0),
    streak: e.stats.loginStreak,
    loginDays: e.stats.loginDays,
    dailyDone: e.stats.dailyDone,
    weeklySets: e.stats.weeklySets,
    eventsJoined: e.stats.eventsJoined,
    boatRaceWins: e.stats.boatRaceWins,
    sets: Lt(e),
    lighthouse: e.lighthouse.length,
    cosmetics: e.cosmetics.length,
    decor: e.stats.decorPlaced,
    bestQueue: e.stats.bestQueue,
    sprint: e.profile.sprint,
    nightWatch: e.profile.nightWatch,
    prestiges: e.stats.prestiges,
    vip: e.stats.vipDone,
    jackpot: e.stats.wheelJackpot,
    expeditions: e.stats.expeditions,
    passLevel: Math.max(e.pass.level, e.stats.seasonMaxLevel),
    legendaryFish: e.stats.legendaryFish,
    magnate: e.profile.magnate,
  };
}
function J(e) {
  let t = Qt(e),
    n = [];
  for (let r of Dt)
    e.achievements.includes(r.id) ||
      (r.test(t) &&
        (e.achievements.push(r.id),
        (e.profile.shells += r.shells),
        (e.stats.shellsEarned += r.shells),
        n.push({ kind: `achievement`, id: r.id })));
  return n;
}
function $t(e, t) {
  if (!(t <= 0)) {
    if (e.pass.level >= 30)
      for (e.pass.xp += t; e.pass.xp >= S.passOverflowXp; )
        (e.pass.xp -= S.passOverflowXp), e.pass.overflowChests++;
    else
      for (e.pass.xp += t; e.pass.level < 30 && e.pass.xp >= it(e.pass.level); )
        (e.pass.xp -= it(e.pass.level)),
          e.pass.level++,
          (e.stats.seasonMaxLevel = Math.max(
            e.stats.seasonMaxLevel,
            e.pass.level,
          ));
  }
}
function en(e, t, n) {
  let r = (t === `daily` ? e.quests.daily : e.quests.weekly)[n];
  if (!r || r.claimed || r.progress < r.target) return !1;
  r.claimed = !0;
  let i = t === `daily` ? 10 : 15,
    a = t === `daily` ? 40 : 80;
  return (
    (e.profile.shells += i),
    (e.stats.shellsEarned += i),
    $t(e, a),
    t === `daily` && (e.stats.dailyDone += 1),
    !0
  );
}
function tn(e) {
  if (e.quests.dailyBonusClaimed || !e.quests.daily.every((e) => e.claimed))
    return !1;
  (e.quests.dailyBonusClaimed = !0),
    (e.profile.shells += 20),
    (e.profile.keys += 1),
    (e.stats.shellsEarned += 20),
    $t(e, 30);
  for (let t of e.quests.weekly) t.type === `daily` && (t.progress += 3);
  return !0;
}
function nn(e, t) {
  return e.quests.weeklyBonusClaimed || !e.quests.weekly.every((e) => e.claimed)
    ? !1
    : ((e.quests.weeklyBonusClaimed = !0),
      (e.profile.shells += 45),
      (e.stats.shellsEarned += 45),
      (e.stats.weeklySets += 1),
      (e.pass.starTokens += 3),
      e.pass.starTokens >= S.starTokensToUnlock && (e.pass.starUnlocked = !0),
      Y(e, `rare`, t),
      $t(e, 100),
      !0);
}
function rn(e, t, n) {
  let r = e.quests.daily[t];
  if (!r || r.claimed) return !1;
  let i = K(`reroll` + n + t + e.stats.dailyDone),
    a = W(e),
    o = qt[i.int(qt.length)],
    s = o.base;
  return (
    o.type === `sell` && (s = 12 + a * 8),
    o.type === `serve` && (s = 10 + a * 6),
    o.type === `earn` && (s = Math.round(I(a, 1) * 50)),
    (e.quests.daily[t] = {
      template: o.id + `r`,
      type: o.type,
      target: s,
      progress: 0,
      claimed: !1,
    }),
    !0
  );
}
function an(e, t, n) {
  let r = V(t);
  if (e.login.lastClaimDay === r) return !1;
  let i = Be[e.login.cycle % 7],
    a = n ? 2 : 1;
  i.kind === `coins` &&
    (e.islands[e.profile.currentIsland - 1].coins += (i.amount ?? 0) * a),
    i.kind === `shells` &&
      ((e.profile.shells += (i.amount ?? 0) * a),
      (e.stats.shellsEarned += (i.amount ?? 0) * a)),
    i.kind === `key` && (e.profile.keys += a),
    i.kind === `turbo` && (e.profile.turboTickets += a),
    i.kind === `helper` &&
      (Y(e, `rare`, K(`login` + r)),
      (e.pass.starTokens += 1),
      e.pass.starTokens >= S.starTokensToUnlock && (e.pass.starUnlocked = !0)),
    (e.login.lastClaimDay = r),
    (e.login.cycle = (e.login.cycle + 1) % 7),
    (e.login.albumDay = Math.min(28, e.login.albumDay + 1));
  let o = e.login.albumDay;
  if ([7, 14, 21, 28].includes(o) && !e.login.albumClaimed.includes(o)) {
    e.login.albumClaimed.push(o);
    let t =
      o === 7
        ? `hat_flower`
        : o === 14
          ? `frame_album`
          : o === 21
            ? `trail_bubbles`
            : `hat_crown`;
    e.cosmetics.includes(t) || e.cosmetics.push(t);
  }
  return !0;
}
function Y(e, t, n) {
  let r = Le.filter(
    (n) => n.rarity === t && !e.helpers.some((e) => e.id === n.id),
  );
  if (!r.length) {
    let n = t === `legendary` ? 40 : t === `epic` ? 20 : t === `rare` ? 12 : 8;
    return (e.profile.shells += n), (e.stats.shellsEarned += n), null;
  }
  let i = r[n.int(r.length)];
  return e.helpers.push({ id: i.id, level: 1, islandId: null }), i.id;
}
function on(e, t, n) {
  let r = e.helpers.find((e) => e.id === t),
    i = e.islands[n - 1];
  if (
    !r ||
    !i?.unlocked ||
    r.islandId === n ||
    i.crew.length >= It(e, n) ||
    e.expeditions.some((e) => e.helperId === t && !e.claimed)
  )
    return !1;
  let a = R(n, i.crew.length + 1);
  if (i.coins < a) return !1;
  if (((i.coins -= a), r.islandId)) {
    let n = e.islands[r.islandId - 1];
    n && (n.crew = n.crew.filter((e) => e !== t));
  }
  return (r.islandId = n), i.crew.push(t), (e.stats.hires += 1), !0;
}
function sn(e, t) {
  let n = e.helpers.find((e) => e.id === t);
  if (!n?.islandId) return;
  let r = e.islands[n.islandId - 1];
  r && (r.crew = r.crew.filter((e) => e !== t)), (n.islandId = null);
}
function cn(e, t) {
  let n = e.helpers.find((e) => e.id === t);
  if (!n) return !1;
  let r = tt(n.level);
  return e.profile.shells < r
    ? !1
    : ((e.profile.shells -= r), (n.level += 1), !0);
}
function ln(e, t) {
  if (
    e.lighthouse.includes(t) ||
    t < 0 ||
    t >= 40 ||
    (t % 10 > 0 && !e.lighthouse.includes(t - 1))
  )
    return !1;
  let n = et(e.lighthouse.length);
  return e.profile.shells < n
    ? !1
    : ((e.profile.shells -= n), e.lighthouse.push(t), !0);
}
function un(e, t) {
  if (e.cosmetics.includes(t)) return !1;
  let n = Re.find((e) => e.id === t);
  return !n || e.profile.shells < n.cost
    ? !1
    : ((e.profile.shells -= n.cost), e.cosmetics.push(t), !0);
}
function dn(e, t, n) {
  if (t < 1 || t > e.pass.level || (n && !e.pass.starUnlocked)) return !1;
  let r = n ? e.pass.starClaimed : e.pass.claimed;
  if (r.includes(t)) return !1;
  let i = Ve(t, n);
  return fn(e, i.kind, i.amount, i.rarity, i.cosmetic), r.push(t), !0;
}
function fn(e, t, n, r, i) {
  t === `shells`
    ? ((e.profile.shells += n), (e.stats.shellsEarned += n))
    : t === `key`
      ? (e.profile.keys += n)
      : t === `coins`
        ? (e.islands[e.profile.currentIsland - 1].coins += n * 20)
        : t === `helper` && r
          ? Y(e, r, K(`reward` + e.profile.shells + e.helpers.length))
          : t === `cosmetic` &&
            i &&
            !e.cosmetics.includes(i) &&
            e.cosmetics.push(i);
}
function pn(e) {
  return (
    e.pass.level >= 30
      ? (e.pass.overflowChests += 1)
      : ((e.pass.level += 1),
        (e.pass.xp = 0),
        (e.stats.seasonMaxLevel = Math.max(
          e.stats.seasonMaxLevel,
          e.pass.level,
        ))),
    (e.pass.starTokens += 1),
    e.pass.starTokens >= S.starTokensToUnlock && (e.pass.starUnlocked = !0),
    !0
  );
}
function mn(e) {
  return e.pass.overflowChests <= 0
    ? !1
    : (e.pass.overflowChests--,
      (e.profile.shells += 8),
      (e.profile.keys += 1),
      (e.stats.shellsEarned += 8),
      !0);
}
function X(e, t, n) {
  let r = e.islands[t.id - 1].stations[n.id];
  return n.kind === `backpack`
    ? e.profile.backpack >= 8
      ? { kind: `max`, cost: 0 }
      : { kind: `upgrade`, cost: Je(t.id, n.k, e.profile.backpack) }
    : r.built
      ? n.kind === `decor` ||
        n.kind === `house` ||
        n.kind === `hire` ||
        n.kind === `delivery` ||
        n.kind === `attraction` ||
        !n.scale ||
        r.level >= S.maxLevel
        ? { kind: `max`, cost: 0 }
        : { kind: `upgrade`, cost: Je(t.id, n.k, r.level) }
      : n.kind === `decor`
        ? { kind: `build`, cost: $e(t.id, n.k) }
        : n.kind === `hire`
          ? { kind: `max`, cost: 0 }
          : { kind: `build`, cost: Ke(t.id, n.k) };
}
function hn(e, t, n, r) {
  let i = O(t).stations.find((e) => e.id === n),
    a = e.islands[t - 1];
  if (!i || !a) return [];
  let o = a.stations[n],
    s = U(e, t);
  if (i.kind === `backpack`)
    return (
      (e.profile.backpack = Math.min(8, e.profile.backpack + 1)),
      (o.invested = 0),
      J(e)
    );
  if (o.built) {
    let e = rt(t);
    if (e > 0 && i.scale)
      return (
        (o.timer = Math.round(e * 0.55)),
        (o.timerTotal = o.timer),
        (o.pending = `upgrade`),
        (o.invested = 0),
        []
      );
    (o.level = Math.min(S.maxLevel, o.level + 1)), (o.invested = 0);
  } else {
    let e = rt(t);
    if (e > 0)
      return (
        (o.timer = e),
        (o.timerTotal = e),
        (o.pending = `build`),
        (o.invested = 0),
        []
      );
    (o.built = !0), (o.level = 1), (o.invested = 0);
  }
  let c = !o.pending && o.built && o.level === 1 ? `build` : `upgrade`,
    l = i.kind === `decor` && o.level === 1 ? `decor` : c,
    u = q(
      e,
      l === `upgrade`
        ? { type: `upgrade`, island: t, station: n, level: o.level }
        : l === `decor`
          ? { type: `decor`, island: t }
          : { type: `build`, island: t, station: n },
      r,
    ),
    d = U(e, t);
  return (
    d > s && u.push({ kind: `star`, island: t, stars: d }),
    t === 12 && d === 3 && (e.profile.magnate = !0),
    u
  );
}
function gn(e, t, n, r) {
  let i = e.islands[t - 1]?.stations[n];
  if (!i || i.timer > 0 || !i.pending) return [];
  let a = i.pending;
  i.pending = null;
  let o = U(e, t),
    s = O(t).stations.find((e) => e.id === n);
  a === `build`
    ? ((i.built = !0), (i.level = 1))
    : (i.level = Math.min(S.maxLevel, i.level + 1));
  let c = q(
      e,
      a === `upgrade`
        ? { type: `upgrade`, island: t, station: n, level: i.level }
        : s?.kind === `decor`
          ? { type: `decor`, island: t }
          : { type: `build`, island: t, station: n },
      r,
    ),
    l = U(e, t);
  return l > o && c.push({ kind: `star`, island: t, stars: l }), c;
}
function _n(e, t, n, r, i) {
  let a = e.islands[t - 1]?.stations[n];
  if (!a || a.timer <= 0) return [];
  if (r === `shells`) {
    let t = at(a.timer);
    if (e.profile.shells < t) return [];
    e.profile.shells -= t;
  }
  return (a.timer = 0), gn(e, t, n, i);
}
function vn(e, t) {
  let n = t >= 12 ? 0 : Qe(t);
  return t >= 12
    ? { ok: !1, cost: 0, reason: `end` }
    : U(e, t) < 1
      ? { ok: !1, cost: n, reason: `star` }
      : e.islands[t - 1].coins < n
        ? { ok: !1, cost: n, reason: `coins` }
        : { ok: !0, cost: n };
}
function yn(e, t) {
  let n = vn(e, t);
  if (!n.ok) return !1;
  e.islands[t - 1].coins -= n.cost;
  let r = e.islands[t];
  return (
    r && (r.unlocked = !0),
    (e.profile.currentIsland = t + 1),
    (e.profile.playerX = F.x),
    (e.profile.playerZ = F.z),
    !0
  );
}
function bn(e, t) {
  if (t < 6) return !1;
  let n = e.islands[t - 1];
  if (!n || U(e, t) < 1) return !1;
  for (let e of Object.values(n.stations))
    e.built && (e.level = 1),
      (e.progress = 0),
      (e.invested = 0),
      (e.timer = 0),
      (e.pending = null);
  (n.prestige += 1), (e.stats.prestiges += 1);
  let r = `hat_prestige`;
  return e.cosmetics.includes(r) || e.cosmetics.push(r), !0;
}
function xn(e) {
  let t = e.profile.currentIsland,
    n = O(t),
    r = e.islands[t - 1],
    i = e.profile.tutorialStep,
    a =
      n.stations.find((e) => e.kind === `producer` && e.built) ?? n.stations[0],
    o =
      n.stations.find((e) => e.kind === `stall` && e.item === a.item) ??
      n.stations.find((e) => e.kind === `stall`),
    s = n.stations.find((e) => e.kind === `till`);
  if (i === B.Move) return { kind: `move`, x: a.x, z: a.z };
  if (i === B.Pick)
    return { kind: `pickup`, x: a.x, z: a.z, itemId: a.item, stationId: a.id };
  if (i === B.Drop)
    return { kind: `drop`, x: o.x, z: o.z, itemId: o.item, stationId: o.id };
  if (i === B.Till) return { kind: `till`, x: s.x, z: s.z, stationId: s.id };
  if (i === B.Chest || (e.chest.spawned && i < B.Done && i >= B.Chest))
    return { kind: `chest`, x: P.x, z: P.z };
  if (i === B.Turbo) return { kind: `turbo`, x: 0, z: 0 };
  if (i === B.Quests) return { kind: `quests`, x: 0, z: 0 };
  let c = n.stations
    .filter((e) => e.star && !r.stations[e.id]?.built && e.kind !== `hire`)
    .map((t) => ({ s: t, cost: X(e, n, t).cost }))
    .sort((e, t) => e.cost - t.cost);
  if (i === B.Build || i === B.Stall2) {
    let e =
      i === B.Build
        ? (c.find((e) => e.s.kind === `producer`) ?? c[0])
        : (c.find((e) => e.s.kind === `stall`) ?? c[0]);
    if (e)
      return {
        kind: `build`,
        x: e.s.x,
        z: e.s.z,
        cost: e.cost,
        stationId: e.s.id,
      };
  }
  if (i === B.Hire) {
    let e = n.stations.find((e) => e.kind === `hire`);
    return {
      kind: `hire`,
      x: e.x,
      z: e.z,
      cost: R(t, r.crew.length + 1),
      stationId: e.id,
    };
  }
  if (c.length && U(e, t) < 1) {
    let e = c[0];
    return {
      kind: `build`,
      x: e.s.x,
      z: e.s.z,
      cost: e.cost,
      stationId: e.s.id,
    };
  }
  let l = n.stations
    .filter(
      (e) =>
        e.scale &&
        r.stations[e.id]?.built &&
        (r.stations[e.id]?.level ?? 1) < st(t),
    )
    .map((t) => ({
      s: t,
      cost: X(e, n, t).cost,
      level: (r.stations[t.id]?.level ?? 1) + 1,
    }))
    .sort((e, t) => e.cost - t.cost);
  if (l[0] && U(e, t) < 1)
    return {
      kind: `upgrade`,
      x: l[0].s.x,
      z: l[0].s.z,
      cost: l[0].cost,
      stationId: l[0].s.id,
      level: l[0].level,
    };
  if (r.crew.length === 0) {
    let e = n.stations.find((e) => e.kind === `hire`);
    return { kind: `hire`, x: e.x, z: e.z, cost: R(t, 1), stationId: e.id };
  }
  let u = U(e, t);
  if (u < 2) {
    let i = ct(t),
      a = n.stations
        .filter(
          (e) =>
            e.scale &&
            r.stations[e.id]?.built &&
            (r.stations[e.id]?.level ?? 1) < i,
        )
        .map((t) => ({
          s: t,
          cost: X(e, n, t).cost,
          level: (r.stations[t.id]?.level ?? 1) + 1,
        }))
        .sort((e, t) => e.cost - t.cost);
    if (a[0])
      return {
        kind: `upgrade`,
        x: a[0].s.x,
        z: a[0].s.z,
        cost: a[0].cost,
        stationId: a[0].s.id,
        level: a[0].level,
      };
  }
  if (u >= 1 && t < 12) return { kind: `sail`, x: N.x, z: N.z, cost: Qe(t) };
  let d = n.stations.find(
    (e) => e.kind === `decor` && !r.stations[e.id]?.built,
  );
  return d
    ? { kind: `decor`, x: d.x, z: d.z, cost: $e(t, d.k), stationId: d.id }
    : { kind: `play`, x: a.x, z: a.z, stationId: a.id };
}
function Sn(e, t) {
  let n = !1,
    r = (t) => {
      e.profile.tutorialStep !== t && ((e.profile.tutorialStep = t), (n = !0));
    };
  for (let n = 0; n < 12; n++) {
    let n = e.profile.tutorialStep,
      i = e.islands[0],
      a = i.stations.field_cabbage?.built,
      o = i.stations.stall_cabbage?.built;
    if (n === B.Move && t.moved) r(B.Pick);
    else if (n === B.Pick && t.stack > 0) r(B.Drop);
    else if (n === B.Drop && t.dropped) r(B.Till);
    else if (n === B.Till && t.served) r(B.Build);
    else if (n === B.Build && a) r(B.Stall2);
    else if (n === B.Stall2 && o) r(B.Hire);
    else if (n === B.Hire && (t.hired || i.crew.length > 0)) r(B.Chest);
    else if (n === B.Chest && (t.chestOpened || e.chest.openedOnce)) r(B.Turbo);
    else if (n === B.Turbo && t.turboDismissed) r(B.Free);
    else if (n === B.Free && e.profile.totalPlaytime >= 900) r(B.Quests);
    else break;
  }
  return e.profile.tutorialStep === B.Chest && (e.chest.spawned = !0), n;
}
function Cn(e, t, n) {
  let r = j.reduce((e, t) => e + t.weight, 0),
    i = t.next() * r,
    a = 0;
  for (let e = 0; e < j.length; e++)
    if (((i -= j[e].weight), i <= 0)) {
      a = e;
      break;
    }
  let o = j[a],
    s = Ht(e, e.profile.currentIsland, n);
  o.kind === `coins` &&
    (e.islands[e.profile.currentIsland - 1].coins += Math.max(
      20,
      Math.round(s * (a === 0 ? 30 : 90)),
    )),
    o.kind === `shells` &&
      ((e.profile.shells += o.amount ?? 5),
      (e.stats.shellsEarned += o.amount ?? 5)),
    o.kind === `key` && (e.profile.keys += 1),
    o.kind === `turbo` &&
      (e.profile.turboUntil =
        Math.max(e.profile.turboUntil, n) + S.turboSeconds * 1e3);
  let c = !1;
  return (
    o.kind === `jackpot` &&
      ((c = !0),
      (e.stats.wheelJackpot = !0),
      Y(e, `rare`, t),
      (e.profile.shells += 25),
      (e.stats.shellsEarned += 25)),
    { index: a, jackpot: c }
  );
}
function wn(e, t, n) {
  let r = Ht(e, e.profile.currentIsland, n),
    i = t.chance(0.45),
    a = i ? 0 : Math.max(30, Math.round(r * S.chestIncomeSeconds)),
    o = i ? 5 + t.int(16) : 0;
  a && (e.islands[e.profile.currentIsland - 1].coins += a),
    o && ((e.profile.shells += o), (e.stats.shellsEarned += o));
  let s = null;
  t.chance(0.35) && (s = Y(e, t.chance(0.15) ? `rare` : `common`, t));
  let c = !1;
  if (t.chance(0.4)) {
    let t = e.profile.currentIsland;
    e.collections.includes(`${t}:chest`) ||
      (e.collections.push(`${t}:chest`), (c = !0));
  }
  return (
    (e.stats.chests += 1),
    (e.chest.openedOnce = !0),
    (e.chest.spawned = !1),
    (e.chest.nextAt = n + S.chestPeriod * 1e3),
    { coins: a, shells: o, helper: s, card: c }
  );
}
function Tn(e, t, n, r) {
  if (
    !e.helpers.find((e) => e.id === t) ||
    e.expeditions.some((e) => !e.claimed && e.helperId === t) ||
    e.expeditions.filter((e) => !e.claimed).length >= 2
  )
    return !1;
  let i = K(`exp` + r + t),
    a = (n === 1 ? 4 : n === 4 ? 10 : 18) + i.int(4),
    o = +(n === 8),
    s = i.chance(0.4) ? `${e.profile.currentIsland}:expedition` : void 0;
  return (
    e.expeditions.push({
      id: `e${r.toString(36)}`,
      islandId: e.profile.currentIsland,
      helperId: t,
      hours: n,
      startedAt: r,
      endsAt: r + n * 3600 * 1e3,
      claimed: !1,
      shells: a,
      keys: o,
      card: s,
    }),
    !0
  );
}
function En(e, t, n) {
  let r = e.expeditions.find((e) => e.id === t);
  return !r || r.claimed || r.endsAt > n
    ? !1
    : ((r.claimed = !0),
      (e.profile.shells += r.shells),
      (e.stats.shellsEarned += r.shells),
      (e.profile.keys += r.keys),
      (e.stats.expeditions += 1),
      r.card && !e.collections.includes(r.card) && e.collections.push(r.card),
      q(e, { type: `expedition` }, n),
      !0);
}
function Dn(e, t) {
  let n = e.expeditions.find((e) => e.id === t);
  return !n || n.claimed
    ? !1
    : ((n.endsAt = Math.max(n.startedAt, n.endsAt - 36e5)), !0);
}
function On(e, t, n) {
  (e.events.tickets += Math.max(1, Math.round(t))),
    (e.events.fishingBest = Math.max(e.events.fishingBest, t)),
    n >= 3 && (e.stats.legendaryFish = !0),
    q(e, { type: `minigame` }, Date.now());
}
function kn(e, t) {
  if (e.events.claimedTiers.includes(t)) return !1;
  let n = ze[t];
  if (n === void 0 || e.events.tickets < n) return !1;
  e.events.claimedTiers.push(t);
  let r = [5, 10, 0, 20, 0, 30][t] ?? 10;
  return (
    r && ((e.profile.shells += r), (e.stats.shellsEarned += r)),
    t === 2 && (e.profile.keys += 1),
    t === 4 &&
      !e.cosmetics.includes(`trail_stars`) &&
      e.cosmetics.push(`trail_stars`),
    t === 5 && Y(e, `rare`, K(`event` + t + e.events.weekKey)),
    !0
  );
}
function An(e, t) {
  let n = K(`race` + (H(t)?.key ?? kt(t))),
    r = [];
  for (let t = 0; t < 29; t++) {
    let i = Math.round(n.next() ** 0.65 * (900 + W(e) * 400));
    r.push({ name: M[t % M.length], score: i, you: !1 });
  }
  return (
    r.push({
      name: e.profile.name,
      score: Math.floor(e.events.raceScore),
      you: !0,
    }),
    r.sort((e, t) => t.score - e.score),
    r
  );
}
function jn(e, t) {
  let n = H(t)?.key ?? ``;
  if (!n || e.profile.raceClaimedWeek === n) return -1;
  let r = An(e, t).findIndex((e) => e.you);
  return (
    (e.profile.raceClaimedWeek = n),
    r === 0
      ? ((e.stats.boatRaceWins += 1),
        e.cosmetics.includes(`frame_race`) || e.cosmetics.push(`frame_race`),
        (e.profile.shells += 40),
        (e.stats.shellsEarned += 40))
      : r < 3
        ? (e.cosmetics.includes(`frame_race`) || e.cosmetics.push(`frame_race`),
          (e.profile.shells += 20),
          (e.stats.shellsEarned += 20))
        : r < 10 && ((e.profile.shells += 8), (e.stats.shellsEarned += 8)),
    r
  );
}
function Mn(e, t) {
  let n = K(`league` + kt(t)),
    r = [];
  for (let t = 0; t < 19; t++)
    r.push({
      name: M[(t * 3) % M.length],
      score: Math.round(
        n.next() ** 0.7 * (2e3 + e.stats.weekCoins * 0.8 + 500),
      ),
      you: !1,
    });
  return (
    r.push({
      name: e.profile.name,
      score: Math.floor(e.stats.weekCoins),
      you: !0,
    }),
    r.sort((e, t) => t.score - e.score),
    r
  );
}
function Nn(e, t, n) {
  if (!t) return ``;
  let r = Ie(e, t);
  return r ? r.name[n] : t;
}
function Pn(e, t) {
  let n = Ie(e, t);
  return I(e.id, n?.k ?? 1);
}
function Fn(e, t) {
  let n = e.islands[t - 1];
  if (!n || n.crew.length >= It(e, t)) return null;
  let r = e.helpers.filter(
    (t) =>
      !t.islandId &&
      !e.expeditions.some((e) => e.helperId === t.id && !e.claimed),
  );
  if (!r.length) return null;
  let i = new Set(n.crew.map((e) => A(e)?.role));
  for (let e of [`cashier`, `carrier`, `farmer`, `general`]) {
    if (i.has(e)) continue;
    let t = r.find((t) => A(t.id)?.role === e);
    if (t) return t;
  }
  return r[0] ?? null;
}
function In(e, t) {
  e.profile.turboUntil =
    Math.max(t, e.profile.turboUntil) + S.turboSeconds * 1e3;
}
function Ln(e, t, n) {
  (e.profile.internUntil =
    Math.max(t, e.profile.internUntil) + S.internSeconds * 1e3),
    n && (e.profile.freeInternAt = t);
}
function Rn(e, t) {
  return (
    !e.profile.freeInternAt ||
    t - e.profile.freeInternAt >= S.freeInternPeriod * 1e3
  );
}
function zn(e, t, n) {
  if (e.profile.currentIsland < 7 || e.vip) return;
  let r = O(e.profile.currentIsland).goods.filter((e) => e.sell);
  r.length &&
    (e.vip = {
      item: r[n.int(r.length)].id,
      count: 4 + n.int(4),
      have: 0,
      expires: t + S.vipDuration * 1e3,
      reward: S.vipReward + e.profile.currentIsland,
    });
}
function Bn(e, t) {
  if (!e.vip || e.vip.have < e.vip.count) return !1;
  let n = e.vip.reward * (t ? 2 : 1);
  return (
    (e.profile.shells += n),
    (e.stats.shellsEarned += n),
    (e.stats.vipDone += 1),
    (e.vip = null),
    q(e, { type: `vip` }, Date.now()),
    !0
  );
}
function Vn(e) {
  return e.islands
    .filter((e) => e.pendingOffline > 1)
    .map((e) => ({ islandId: e.id, coins: e.pendingOffline }));
}
function Hn() {
  return {
    get(e) {
      try {
        return localStorage.getItem(e);
      } catch {
        return null;
      }
    },
    set(e, t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
    remove(e) {
      try {
        localStorage.removeItem(e);
      } catch {}
    },
  };
}
function Un(e) {
  let t = JSON.stringify(e);
  return (0, Et.compressToUTF16)(
    JSON.stringify({ v: e.v, json: t, sum: ut(t) }),
  );
}
function Wn(e) {
  if (!e) return null;
  try {
    let t = (0, Et.decompressFromUTF16)(e) ?? e,
      n = JSON.parse(t);
    if (!n.json || !n.sum || ut(n.json) !== n.sum) return null;
    let r = JSON.parse(n.json);
    return !r || typeof r.v != `number` ? null : r;
  } catch {
    return null;
  }
}
function Gn(e, t) {
  return e
    ? t
      ? e.profile.totalPlaytime === t.profile.totalPlaytime
        ? e.t >= t.t
          ? e
          : t
        : e.profile.totalPlaytime > t.profile.totalPlaytime
          ? e
          : t
      : e
    : t;
}
var Kn = SLOT_KEY,
  qn = (e) => saveKey(e),
  Jn = class {
    storage;
    cloud;
    constructor(e, t) {
      (this.storage = e), (this.cloud = t);
    }
    readLocal() {
      let e = this.storage.get(Kn) || `A`,
        t = e === `A` ? `B` : `A`;
      return Gn(Wn(this.storage.get(qn(e))), Wn(this.storage.get(qn(t))));
    }
    write(e) {
      (e.v = e.v || 1), (e.t = Date.now());
      let t = (this.storage.get(Kn) || `A`) === `A` ? `B` : `A`;
      this.storage.set(qn(t), Un(e)), this.storage.set(Kn, t);
    }
    async load() {
      let e = this.readLocal(),
        t = null;
      if (this.cloud)
        try {
          t = await Promise.race([
            this.cloud.pull(),
            new Promise((e) => setTimeout(() => e(null), 1200)),
          ]);
        } catch {
          t = null;
        }
      return Gn(e, t) ?? Pt();
    }
    async push(e) {
      if ((this.write(e), this.cloud))
        try {
          await this.cloud.push(e);
        } catch {}
    }
  },
  Yn = class {
    save;
    islandId;
    rng;
    px;
    pz;
    yaw;
    moving = !1;
    stackItem = null;
    stackCount = 0;
    customers = [];
    coins = [];
    fx = [];
    notes = [];
    helpers = [];
    queueLen = 0;
    time = 0;
    order = 1;
    cid = 1;
    coinId = 1;
    pickupCd = 0;
    dropCd = 0;
    serveCd = 0;
    carryCd = 0;
    spawnAcc = 0;
    attractAcc = 0;
    playAcc = 0;
    vipAcc = 0;
    combo = 0;
    comboT = 0;
    mods;
    constructor(e, t, n = 1) {
      (this.save = e),
        (this.islandId = t),
        (this.rng = new z(n)),
        (this.px = e.profile.playerX),
        (this.pz = e.profile.playerZ),
        (this.yaw = e.profile.playerYaw),
        (this.mods = G(e, t, Date.now()));
    }
    get def() {
      return O(this.islandId);
    }
    get island() {
      return this.save.islands[this.islandId - 1];
    }
    tick(e, t, n, r, i) {
      if (i !== `pause`) {
        if (
          ((this.mods = G(this.save, this.islandId, r)),
          (this.time += e),
          (this.fx.length = 0),
          i === `play` ? this.move(e, t, n) : (this.moving = !1),
          this.tickStations(e),
          this.tickTimers(e, r),
          i === `play` && (this.tickHands(e, r), this.tickPads(e, r)),
          this.tickHelpers(e),
          this.tickCustomers(e, r),
          this.tickServe(e, r),
          this.tickCoins(e, r),
          this.tickSpecial(e, r),
          (this.comboT -= e),
          this.comboT <= 0 && (this.combo = 0),
          (this.playAcc += e),
          this.playAcc >= 5)
        ) {
          let e = this.playAcc;
          (this.playAcc = 0),
            (this.save.profile.totalPlaytime += e),
            this.notes.push(
              ...q(
                this.save,
                { type: `play`, island: this.islandId, dt: e },
                r,
              ),
            );
        }
        this.persist();
      }
    }
    persist() {
      (this.save.profile.playerX = this.px),
        (this.save.profile.playerZ = this.pz),
        (this.save.profile.playerYaw = this.yaw),
        (this.save.profile.currentIsland = this.islandId);
    }
    move(e, t, n) {
      let r = Math.hypot(t, n);
      r > 1 && ((t /= r), (n /= r), (r = 1));
      let i = 5 * this.mods.speed * (this.stackCount > 0 ? 0.92 : 1),
        a = Oe(this.px + t * i * e, this.pz + n * i * e, this.px, this.pz);
      (this.px = a.x),
        (this.pz = a.z),
        (this.moving = r > 0.12),
        this.moving && (this.yaw = Math.atan2(t, n));
    }
    station(e) {
      return this.def.stations.find((t) => t.id === e);
    }
    tickStations(e) {
      for (let t of this.def.stations) {
        let n = this.island.stations[t.id];
        if (n?.built) {
          if (t.kind === `producer`) {
            let r = S.stockMaxBase + n.level;
            if (n.stock >= r) continue;
            n.progress += e * this.mods.prod;
            let i = L(n.level);
            n.progress >= i &&
              ((n.progress = 0),
              n.stock++,
              this.fx.push({ type: `pop`, x: t.x, z: t.z }));
          } else if (t.kind === `processor`) {
            let r = S.stockMaxBase + n.level;
            if (n.inputStock <= 0 || n.stock >= r) continue;
            (n.progress += e * this.mods.prod),
              n.progress >= L(n.level) &&
                ((n.progress = 0),
                n.inputStock--,
                n.stock++,
                this.fx.push({ type: `pop`, x: t.x, z: t.z }));
          }
        }
      }
    }
    tickTimers(e, t) {
      for (let n of this.def.stations) {
        if (n.kind === `delivery`) continue;
        let r = this.island.stations[n.id];
        !r ||
          r.timer <= 0 ||
          !r.pending ||
          ((r.timer = Math.max(0, r.timer - e)),
          r.timer === 0 &&
            this.notes.push(...gn(this.save, this.islandId, n.id, t)));
      }
    }
    canCarry(e) {
      return this.def.stations.some((t) =>
        this.island.stations[t.id]?.built
          ? (t.kind === `stall` && t.item === e) ||
            (t.kind === `processor` && t.input === e) ||
            (t.kind === `delivery` && t.item === e)
          : !1,
      );
    }
    nearest(e) {
      let t = null,
        n = S.zoneRadius;
      for (let r of this.def.stations) {
        let i = this.island.stations[r.id];
        if (!i?.built) continue;
        let a = Math.hypot(this.px - r.x, this.pz - r.z);
        if (!(a > n)) {
          if (e === `pick`) {
            if (
              (r.kind === `producer` || r.kind === `processor`) &&
              i.stock > 0
            ) {
              if (
                (r.item && !this.canCarry(r.item)) ||
                (this.stackCount > 0 && this.stackItem !== r.item) ||
                this.stackCount >= Bt(this.save, this.mods)
              )
                continue;
              (t = r), (n = a);
            }
          } else
            this.stackCount > 0 &&
              this.stackItem &&
              ((r.kind === `stall` &&
                r.item === this.stackItem &&
                i.stock < S.stallMaxBase + i.level) ||
                (r.kind === `processor` &&
                  r.input === this.stackItem &&
                  i.inputStock < 8) ||
                (r.kind === `delivery` &&
                  r.item === this.stackItem &&
                  i.stock < S.deliveryBatch)) &&
              ((t = r), (n = a));
        }
      }
      return t;
    }
    tickHands(e, t) {
      (this.pickupCd -= e), (this.dropCd -= e);
      let n = this.nearest(`drop`);
      if (n && this.dropCd <= 0) {
        let e = this.island.stations[n.id];
        n.kind === `stall` || n.kind === `delivery`
          ? e.stock++
          : e.inputStock++,
          this.stackCount--,
          this.stackCount <= 0 &&
            ((this.stackCount = 0), (this.stackItem = null)),
          (this.dropCd = S.dropInterval),
          this.combo++,
          (this.comboT = 0.7),
          this.fx.push({ type: `drop`, x: n.x, z: n.z, amount: this.combo });
        return;
      }
      let r = this.nearest(`pick`);
      if (r && this.pickupCd <= 0 && !n) {
        let e = this.island.stations[r.id];
        e.stock--,
          (this.stackItem = r.item ?? this.stackItem),
          this.stackCount++,
          (this.pickupCd = S.pickupInterval),
          this.combo++,
          (this.comboT = 0.7),
          this.fx.push({ type: `pop`, x: r.x, z: r.z, amount: this.combo });
      }
    }
    tickPads(e, t) {
      if (this.nearest(`pick`) || this.nearest(`drop`)) return;
      let n = new Set(Ft(this.save, 2).map((e) => e.stationId)),
        r = null,
        i = S.zoneRadius;
      for (let e of this.def.stations) {
        let t = Math.hypot(this.px - e.x, this.pz - e.z);
        t < i && ((r = e), (i = t));
      }
      if (!r || (r.kind !== `hire` && !n.has(r.id))) return;
      let a = this.island.stations[r.id];
      if (a.timer > 0) return;
      if (r.kind === `hire`) {
        this.tickHire(e);
        return;
      }
      let o = X(this.save, this.def, r);
      if (o.kind === `max` || o.cost <= 0) return;
      let s = o.cost - a.invested;
      if ((s <= 0 && (a.invested = o.cost), this.island.coins <= 0)) return;
      let c = Math.max(40, s / 0.85),
        l = Math.min(
          this.island.coins,
          c * e,
          Math.max(0, o.cost - a.invested),
        );
      if (
        !(l <= 0) &&
        ((this.island.coins -= l),
        (a.invested += l),
        Math.random() < e * 8 && this.fx.push({ type: `coin`, x: r.x, z: r.z }),
        a.invested >= o.cost - 0.01)
      ) {
        a.invested = 0;
        let e = hn(this.save, this.islandId, r.id, t);
        this.notes.push(...e);
        let n = this.island.stations[r.id]?.built;
        this.fx.push({
          type: n ? `build` : `text`,
          x: r.x,
          z: r.z,
          text: n ? `+1` : `…`,
        }),
          e.some((e) => e.kind === `star`)
            ? this.fx.push({ type: `fanfare`, x: this.px, z: this.pz })
            : this.fx.push({ type: `confetti`, x: r.x, z: r.z });
      }
    }
    tickHire(e) {
      let t = Fn(this.save, this.islandId);
      if (!t) return;
      let n = R(this.islandId, this.island.crew.length + 1),
        r = this.station(`hire`);
      if (!r) return;
      let i = this.island.stations.hire,
        a = n - i.invested;
      this.island.coins <= 0 || (a <= 0 && i.invested);
      let o = Math.max(40, a / 0.85),
        s = Math.min(this.island.coins, o * e, Math.max(0, n - i.invested));
      s <= 0 ||
        ((this.island.coins -= s),
        (i.invested += s),
        i.invested >= n - 0.01 &&
          ((i.invested = 0),
          (t.islandId = this.islandId),
          this.island.crew.push(t.id),
          this.notes.push(
            ...q(
              this.save,
              { type: `hire`, island: this.islandId },
              Date.now(),
            ),
          ),
          this.fx.push({ type: `confetti`, x: r.x, z: r.z, text: `+` })));
    }
    tickHelpers(e) {
      this.carryCd -= e;
      let t = [],
        n = this.def.stations.find((e) => e.kind === `till`),
        r = 0,
        i = this.island.crew.map((e) => ({
          id: e,
          role: A(e)?.role ?? `general`,
        }));
      for (let e of i)
        if (e.role === `cashier`)
          t.push({ id: e.id, x: n.x, z: n.z + 0.85, moving: !1, carry: !1 });
        else if (e.role === `carrier` || e.role === `general`) {
          r++;
          let i = (this.time * 0.45 + r * 0.37) % 1,
            a = this.def.stations.find(
              (e) =>
                (e.kind === `producer` || e.kind === `processor`) &&
                this.island.stations[e.id]?.built,
            ),
            o = this.def.stations.find(
              (e) => e.kind === `stall` && this.island.stations[e.id]?.built,
            ),
            s = a ?? n,
            c = o ?? n,
            l = i < 0.5 ? i * 2 : (1 - i) * 2;
          t.push({
            id: e.id,
            x: s.x + (c.x - s.x) * l,
            z: s.z + (c.z - s.z) * l,
            moving: !0,
            carry: i < 0.5,
          });
        } else {
          let r =
            this.def.stations.find(
              (e) => e.kind === `producer` && this.island.stations[e.id]?.built,
            ) ?? n;
          t.push({
            id: e.id,
            x: r.x + 1.1,
            z: r.z + 0.4,
            moving: !1,
            carry: !1,
          });
        }
      if (this.mods.carriers > 0 && this.carryCd <= 0) {
        let e = Math.max(1, this.mods.carriers);
        for (let t = 0; t < e; t++) this.autoCarry();
        this.carryCd = S.carrierInterval / Math.max(1, this.mods.speed);
      }
      this.helpers = t;
    }
    autoCarry() {
      for (let e of this.def.stations) {
        let t = this.island.stations[e.id];
        if (
          !t?.built ||
          t.stock <= 0 ||
          (e.kind !== `producer` && e.kind !== `processor`)
        )
          continue;
        let n = e.item;
        if (!n) continue;
        let r = this.def.stations.find((e) => {
          let t = this.island.stations[e.id];
          return t?.built
            ? (e.kind === `processor` && e.input === n && t.inputStock < 8) ||
                (e.kind === `stall` &&
                  e.item === n &&
                  t.stock < S.stallMaxBase + t.level)
            : !1;
        });
        if (!r) continue;
        let i = this.island.stations[r.id];
        t.stock--, r.kind === `processor` ? i.inputStock++ : i.stock++;
        return;
      }
    }
    tickCustomers(e, t) {
      let n = this.def.stations.filter(
          (e) => e.kind === `stall` && this.island.stations[e.id]?.built,
        ),
        r = n.filter((e) => (this.island.stations[e.id]?.stock ?? 0) > 0),
        i =
          (0.4 +
            0.08 * n.length +
            0.05 *
              this.def.stations.filter(
                (e) => e.kind === `decor` && this.island.stations[e.id]?.built,
              ).length) *
          this.mods.lambda;
      this.spawnAcc += e * i;
      let a = this.def.stations.find((e) => e.kind === `till`);
      if (
        this.spawnAcc >= 1 &&
        this.customers.length < S.queueCap &&
        r.length
      ) {
        --this.spawnAcc;
        let e = r[this.rng.int(r.length)],
          t = Xn(this.save, this.islandId) >= 1 && this.rng.chance(0.08);
        this.customers.push({
          id: this.cid++,
          kind: this.def.customers[this.rng.int(this.def.customers.length)],
          x: (this.rng.next() - 0.5) * 1.2,
          z: 10.5,
          state: `toStall`,
          stallId: e.id,
          item: null,
          order: this.order++,
          timer: 0,
          rare: t,
        });
      } else this.spawnAcc > 2 && (this.spawnAcc = 2);
      let o = 1.85;
      for (let t of this.customers)
        if (t.state === `toStall` || t.state === `wait`) {
          let n = t.stallId ? this.station(t.stallId) : null;
          if (!n) {
            t.state = `leave`;
            continue;
          }
          let r = this.island.stations[n.id]?.stock ?? 0;
          r <= 0 &&
            t.state === `toStall` &&
            ((t.state = `wait`), (t.timer = 2.2));
          let i = n.x - 1.25,
            a = n.z;
          this.stepToward(t, i, a, o * e) &&
            t.state === `toStall` &&
            r > 0 &&
            (this.island.stations[n.id].stock--,
            (t.item = n.item ?? null),
            (t.state = `toTill`),
            this.fx.push({ type: `pop`, x: t.x, z: t.z })),
            t.state === `wait` &&
              ((t.timer -= e),
              r > 0
                ? (t.state = `toStall`)
                : t.timer <= 0 && (t.state = `leave`));
        } else if (t.state === `toTill`) {
          let n = this.queueIndex(t),
            r = a.x,
            i = a.z + 1.35 + n * 0.78;
          this.stepToward(t, r, i, o * e) && (t.state = `queue`);
        } else if (t.state === `queue`) {
          let n = this.queueIndex(t),
            r = a.x,
            i = a.z + 1.35 + n * 0.78;
          this.stepToward(t, r, i, o * e);
        } else
          t.state === `sit`
            ? ((t.timer -= e), t.timer <= 0 && (t.state = `leave`))
            : t.state === `leave` &&
              this.stepToward(t, 0, 13.5, o * e) &&
              (t.state = `leave`);
      (this.customers = this.customers.filter(
        (e) => !(e.state === `leave` && e.z > 12.6 && Math.abs(e.x) < 1.8),
      )),
        (this.queueLen = this.customers.filter(
          (e) => e.state === `queue` || e.state === `toTill`,
        ).length),
        this.queueLen > this.save.stats.bestQueue &&
          (this.save.stats.bestQueue = this.queueLen);
    }
    queueIndex(e) {
      return this.customers.filter(
        (t) =>
          (t.state === `queue` || t.state === `toTill`) && t.order < e.order,
      ).length;
    }
    stepToward(e, t, n, r) {
      let i = t - e.x,
        a = n - e.z,
        o = Math.hypot(i, a);
      return o <= r || o < 0.12
        ? ((e.x = t), (e.z = n), !0)
        : ((e.x += (i / o) * r), (e.z += (a / o) * r), !1);
    }
    tickServe(e, t) {
      let n = this.def.stations.find((e) => e.kind === `till`);
      if (!n) return;
      let r = this.island.stations.till,
        i =
          Math.hypot(this.px - n.x, this.pz - n.z) < S.zoneRadius + 0.2 ||
          this.mods.cashiers > 0,
        a = this.customers
          .filter((e) => e.state === `queue`)
          .sort((e, t) => e.order - t.order)[0];
      if (!a || !i || !r) {
        this.serveCd = 0;
        return;
      }
      this.serveCd += e;
      let o = S.serviceBase * 0.96 ** (r.level - 1) * this.mods.serve;
      if (this.serveCd < o) return;
      this.serveCd = 0;
      let s = a.item ?? `carrot`,
        c = Math.max(1, Math.round(Pn(this.def, s) * this.mods.active));
      if ((this.burstCoins(n.x, n.z + 0.4, c), a.rare)) {
        let e = `${this.islandId}:guest`;
        this.save.collections.includes(e) ||
          (this.save.collections.push(e),
          this.notes.push({ kind: `card`, id: e }));
      }
      if (
        (this.notes.push(
          ...q(
            this.save,
            {
              type: `serve`,
              island: this.islandId,
              n: 1,
              queue: this.queueLen,
            },
            t,
          ),
        ),
        this.notes.push(
          ...q(
            this.save,
            { type: `sale`, island: this.islandId, item: s, coins: c },
            t,
          ),
        ),
        this.fx.push({
          type: `ding`,
          x: n.x,
          z: n.z,
          text: `+${c}`,
          amount: c,
        }),
        this.def.seated && this.def.seats.length)
      ) {
        let e = this.def.seats[a.id % this.def.seats.length];
        (a.state = `sit`),
          (a.x = e.x),
          (a.z = e.z),
          (a.timer = 2.4),
          (a.item = null);
      } else (a.state = `leave`), (a.item = null);
    }
    burstCoins(e, t, n) {
      let r = Math.min(6, Math.max(1, Math.round(Math.sqrt(n)))),
        i = n;
      for (let a = 0; a < r; a++) {
        let o = a === r - 1 ? i : Math.max(1, Math.round(n / r));
        i -= o;
        let s = this.rng.next() * Math.PI * 2;
        this.coins.push({
          id: this.coinId++,
          x: e,
          z: t,
          vx: Math.cos(s) * (1.4 + this.rng.next()),
          vz: Math.sin(s) * (1.4 + this.rng.next()),
          value: Math.max(1, o),
          age: 0,
        });
      }
    }
    tickCoins(e, t) {
      let n = [];
      for (let t of this.coins) {
        if (((t.age += e), t.age < S.magnetDelay)) {
          (t.x += t.vx * e),
            (t.z += t.vz * e),
            (t.vx *= 0.92),
            (t.vz *= 0.92),
            n.push(t);
          continue;
        }
        let r = this.px - t.x,
          i = this.pz - t.z,
          a = Math.hypot(r, i);
        if (a < S.magnetRadius || t.age > 2.4) {
          if (a < 0.45) {
            (this.island.coins += t.value),
              (this.island.lifetimeEarned += t.value),
              (this.save.stats.earned += t.value),
              (this.save.stats.weekCoins += t.value),
              this.fx.push({
                type: `text`,
                x: this.px,
                z: this.pz,
                text: `+${t.value}`,
              });
            continue;
          }
          (t.x += (r / (a || 1)) * 12 * e), (t.z += (i / (a || 1)) * 12 * e);
        }
        t.age < 12 && n.push(t);
      }
      this.coins = n;
    }
    tickSpecial(e, t) {
      t >= this.save.chest.nextAt && (this.save.chest.spawned = !0);
      let n = this.def.stations.find((e) => e.kind === `attraction`);
      n &&
        this.island.stations.attraction?.built &&
        (this.island.crew.length > 0 ||
          Math.hypot(this.px - n.x, this.pz - n.z) < 2) &&
        ((this.attractAcc += e),
        this.attractAcc >= S.attractionPeriod &&
          ((this.attractAcc = 0),
          this.burstCoins(
            n.x,
            n.z,
            Math.max(
              2,
              Math.round(Pn(this.def, this.def.goods[0]?.id ?? `carrot`)),
            ),
          )));
      let r = this.def.stations.find((e) => e.kind === `delivery`);
      if (r) {
        let t = this.island.stations.delivery;
        if (
          (t?.built &&
            t.stock >= S.deliveryBatch &&
            t.timer <= 0 &&
            ((t.timer = S.deliverySeconds), (t.timerTotal = S.deliverySeconds)),
          t?.built &&
            t.timer > 0 &&
            t.stock >= S.deliveryBatch &&
            ((t.timer = Math.max(0, t.timer - e)), t.timer <= 0))
        ) {
          let e = Math.round(
            Pn(this.def, r.item ?? `coconut`) * t.stock * S.deliveryBonus,
          );
          (t.stock = 0),
            (t.timer = 0),
            this.burstCoins(r.x, r.z, e),
            this.fx.push({ type: `fanfare`, x: r.x, z: r.z, text: `+${e}` });
        }
      }
      (this.vipAcc += e),
        this.vipAcc > 25 &&
          ((this.vipAcc = 0),
          !this.save.vip && this.rng.chance(0.4) && zn(this.save, t, this.rng)),
        this.save.vip &&
          t > this.save.vip.expires &&
          this.save.vip.have < this.save.vip.count &&
          (this.save.vip = null);
    }
    suggestTarget() {
      let e = this.def.stations.find((e) => e.kind === `till`);
      if (this.stackCount > 0 && this.stackItem) {
        let e = this.def.stations.find(
            (e) =>
              e.kind === `stall` &&
              e.item === this.stackItem &&
              this.island.stations[e.id]?.built,
          ),
          t = this.def.stations.find(
            (e) =>
              e.kind === `processor` &&
              e.input === this.stackItem &&
              this.island.stations[e.id]?.built,
          ),
          n = e ?? t;
        if (n) return { x: n.x, z: n.z };
      }
      let t = this.customers.some((e) => e.state === `queue`),
        n = this.def.stations.some(
          (e) =>
            e.kind === `stall` && (this.island.stations[e.id]?.stock ?? 0) > 2,
        );
      if (t && this.mods.cashiers === 0 && n) return { x: e.x, z: e.z };
      let r = Ft(this.save, 1)[0];
      if (r && this.stackCount === 0 && this.island.coins >= r.cost)
        return { x: r.x, z: r.z };
      let i = null,
        a = -1;
      for (let e of this.def.stations) {
        if (e.kind !== `producer` && e.kind !== `processor`) continue;
        let t = this.island.stations[e.id];
        if (
          !t?.built ||
          t.stock <= 0 ||
          (e.item && !this.canCarry(e.item)) ||
          (this.stackItem && this.stackItem !== e.item)
        )
          continue;
        let n = t.stock - Math.hypot(this.px - e.x, this.pz - e.z) * 0.15;
        n > a && ((a = n), (i = e));
      }
      if (i && this.stackCount < Bt(this.save, this.mods))
        return { x: i.x, z: i.z };
      let o = this.def.stations.find(
        (e) => e.kind === `producer` && this.island.stations[e.id]?.built,
      );
      return o ? { x: o.x, z: o.z } : { x: e.x, z: e.z };
    }
  };
function Xn(e, t) {
  let n = O(t),
    r = e.islands[t - 1];
  return r
    ? +!!n.stations.filter((e) => e.star).every((e) => r.stations[e.id]?.built)
    : 0;
}
var Z = `#3B2414`;
function Zn(e) {
  return `<svg class="ico" viewBox="0 0 32 32" aria-hidden="true">${e}</svg>`;
}
var Qn = {
  coin: `<circle cx="16" cy="16" r="11" fill="#FFD15C" stroke="${Z}" stroke-width="2.4"/><circle cx="16" cy="16" r="6" fill="none" stroke="${Z}" stroke-width="2"/>`,
  shell: `<path d="M8 20c2-8 14-10 16-2 1 6-4 10-8 8-3 2-8 0-8-6z" fill="#FF8A6A" stroke="${Z}" stroke-width="2.2"/>`,
  gear: `<circle cx="16" cy="16" r="5" fill="#FFF6E0" stroke="${Z}" stroke-width="2.2"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" stroke="${Z}" stroke-width="2.2" stroke-linecap="round"/>`,
  gift: `<rect x="6" y="14" width="20" height="12" rx="2" fill="#FF7A59" stroke="${Z}" stroke-width="2.2"/><path d="M8 14h16v-3H8zM16 8v18" stroke="${Z}" stroke-width="2.2"/><path d="M16 11c-3-4-7-1-4 1h4c3-2-1-5-4-1" fill="#FFD15C" stroke="${Z}" stroke-width="1.6"/>`,
  cal: `<rect x="6" y="8" width="20" height="18" rx="3" fill="#FFF6E0" stroke="${Z}" stroke-width="2.2"/><path d="M6 14h20M11 6v4M21 6v4" stroke="${Z}" stroke-width="2.2" stroke-linecap="round"/>`,
  mail: `<rect x="5" y="9" width="22" height="15" rx="2" fill="#8E6CFF" stroke="${Z}" stroke-width="2.2"/><path d="M6 11l10 7 10-7" fill="none" stroke="#fff" stroke-width="2"/>`,
  event: `<path d="M16 5l2.4 6.2H25l-5 4 2 6.3L16 18l-6 3.5 2-6.3-5-4h6.6z" fill="#FFB938" stroke="${Z}" stroke-width="2"/>`,
  map: `<path d="M6 8l7 3 6-3 7 3v14l-7-3-6 3-7-3z" fill="#7ED0F5" stroke="${Z}" stroke-width="2"/><circle cx="16" cy="15" r="2.2" fill="#E8574A"/>`,
  crew: `<circle cx="11" cy="13" r="4" fill="#F4E6D4" stroke="${Z}" stroke-width="2"/><circle cx="21" cy="13" r="4" fill="#F08A3C" stroke="${Z}" stroke-width="2"/><path d="M4 25c1-5 6-6 8-6s6 2 7 6M17 25c1-4 4-5 7-5 3 0 6 1 7 5" fill="none" stroke="${Z}" stroke-width="2" stroke-linecap="round"/>`,
  island: `<path d="M4 22c3-1 5-6 8-6 2 4 6 3 8 0 3 1 6 5 8 6" fill="#6CCB3C" stroke="${Z}" stroke-width="2"/><path d="M16 16v-6" stroke="${Z}" stroke-width="2"/><circle cx="16" cy="8" r="2.4" fill="#E8574A"/>`,
  light: `<path d="M12 28V14h8v14" fill="#F7D98B" stroke="${Z}" stroke-width="2"/><path d="M10 14h12l-2-6H12z" fill="#E8574A" stroke="${Z}" stroke-width="2"/><circle cx="16" cy="6" r="2" fill="#FFD15C" stroke="${Z}" stroke-width="1.6"/>`,
  pass: `<rect x="6" y="10" width="20" height="14" rx="3" fill="#8E6CFF" stroke="${Z}" stroke-width="2"/><path d="M6 15h20" stroke="#fff" stroke-width="2"/>`,
  play: `<circle cx="16" cy="16" r="11" fill="#8E6CFF" stroke="${Z}" stroke-width="2"/><path d="M13 11l9 5-9 5z" fill="#fff"/>`,
  close: `<circle cx="16" cy="16" r="12" fill="#E8574A" stroke="${Z}" stroke-width="2"/><path d="M11 11l10 10M21 11L11 21" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`,
  glove: `<path d="M10 18v-6a2 2 0 0 1 4 0v5M14 12V8a2 2 0 0 1 4 0v6M18 13V9a2 2 0 0 1 4 0v8c0 5-3 8-8 8h-2c-4 0-6-3-6-6v-3a2 2 0 0 1 4 0" fill="#FFF6E0" stroke="${Z}" stroke-width="2" stroke-linejoin="round"/>`,
};
function Q(e) {
  return Zn(Qn[e] ?? Qn.coin);
}
function $n(e) {
  return e
    .replace(/\p{Extended_Pictographic}/gu, ``)
    .replace(/\uFE0F/g, ``)
    .replace(/\s{2,}/g, ` `)
    .trim();
}
var er = class {
  game;
  root;
  sheetKey = ``;
  built = !1;
  constructor(e, t) {
    (this.game = e),
      (this.root = document.createElement(`div`)),
      (this.root.id = `ui`),
      t.appendChild(this.root);
  }
  mount() {
    (this.root.innerHTML = `
      <div class="joy-catch" id="joy-catch"></div>
      <div class="hud" id="hud"></div>
      <div class="joy" id="joy"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="sheet-wrap" id="sheet-wrap"></div>
      <div class="toasts" id="toasts"></div>
      <div class="floaters" id="floaters"></div>
      <div class="travel" id="travel" hidden></div>
      <div class="hand" id="hand">${C(this.game.lang, `tutorial.hand`)}</div>
    `),
      this.root.querySelector(`#sheet-wrap`).addEventListener(`click`, (e) => {
        let t = e.target.closest(`[data-act]`);
        t &&
          (e.preventDefault(),
          e.stopPropagation(),
          this.game.act(t.dataset.act || ``, t.dataset.id ?? null));
      }),
      this.root.addEventListener(`change`, (e) => {
        let t = e.target;
        t.id === `pname` && this.game.act(`rename`, t.value);
      }),
      (this.built = !0),
      this.paintSheet(!0);
  }
  hudBound = !1;
  update() {
    if (!this.built) return;
    let e = this.game,
      t = e.lang,
      n = this.root.querySelector(`#hud`);
    this.hudBound ||
      ((this.hudBound = !0),
      (n.innerHTML = `
        <div class="top" data-block>
          <div class="chip" id="coin-chip"></div>
          <div class="chip" id="shell-chip"></div>
          <div class="starbar" id="star-chip"></div>
          <button class="icon-btn" data-act="nav" data-id="pause" aria-label="settings">${Q(`gear`)}</button>
        </div>
        <div class="side left" data-block>
          <button class="round" data-act="nav" data-id="quests" id="btn-quests" aria-label="quests">${Q(`gift`)}<small id="lbl-q"></small></button>
          <button class="round" data-act="nav" data-id="calendar" id="btn-cal" aria-label="calendar">${Q(`cal`)}<small id="lbl-cal"></small></button>
        </div>
        <div class="side right" data-block>
          <button class="round" data-act="nav" data-id="event" id="btn-event" aria-label="event">${Q(`event`)}<small id="lbl-ev"></small></button>
          <button class="round" data-act="nav" data-id="mail" id="btn-mail" aria-label="mail">${Q(`mail`)}<small id="lbl-mail"></small></button>
        </div>
        <div class="tray" id="tray" data-block hidden>
          <button class="round reward-round" data-act="turbo-open" aria-label="turbo">${Q(`play`)}</button>
          <button class="round reward-round" data-act="intern-open" aria-label="intern">${Q(`crew`)}</button>
        </div>
        <div class="goal" data-block id="goal"><b></b></div>
        <nav class="nav" data-block id="nav"></nav>
      `),
      n.addEventListener(`click`, (t) => {
        let n = t.target.closest(`[data-act]`);
        n &&
          (t.preventDefault(),
          t.stopPropagation(),
          e.act(n.dataset.act || ``, n.dataset.id ?? null));
      }));
    let r = U(e.save, e.save.profile.currentIsland),
      i = O(e.save.profile.currentIsland),
      a = Vn(e.save).length,
      o = e.save.quests.daily.some((e) => !e.claimed && e.progress >= e.target),
      s = e.save.login.lastClaimDay !== e.dayKey,
      c = H(e.now),
      l = $n(tr(t, xn(e.save), i)),
      u = !!e.sheet,
      d = new Date(e.now).getHours(),
      f = d === 12 || d === 19;
    (this.root.querySelector(`#coin-chip`).innerHTML =
      `${Q(`coin`)}<b>${w(e.runtime.island.coins, t)}</b>${f ? `<i class="happy-badge">×2</i>` : ``}`),
      (this.root.querySelector(`#shell-chip`).innerHTML =
        `${Q(`shell`)}<b>${w(e.save.profile.shells, t)}</b>`);
    let p = this.root.querySelector(`#star-chip`);
    (p.innerHTML = `<span style="width:${(r / 3) * 100}%"></span>`),
      (p.title = `${r}/3`);
    let m = this.root.querySelector(`#goal`);
    (m.hidden = u),
      (m.querySelector(`b`).textContent = l),
      this.root.classList.toggle(`sheet-open`, u);
    let h = this.root.querySelector(`#tray`);
    (h.hidden = u),
      this.root.querySelector(`#btn-quests`).classList.toggle(`badge`, o),
      this.root.querySelector(`#btn-cal`).classList.toggle(`badge`, s),
      this.root.querySelector(`#btn-mail`).classList.toggle(`badge`, a > 0),
      this.root.querySelector(`#btn-event`).classList.toggle(`live`, !!c);
    let g = this.root.querySelector(`#nav`),
      _ = `${e.sheet}|${t}`;
    g.dataset.key !== _ &&
      ((g.dataset.key = _),
      (g.innerHTML = [
        $(`map`, Q(`map`), C(t, `nav.map`), e.sheet),
        $(`crew`, Q(`crew`), C(t, `nav.crew`), e.sheet),
        $(`island`, Q(`island`), C(t, `nav.island`), e.sheet),
        $(`light`, Q(`light`), C(t, `nav.light`), e.sheet),
        $(`pass`, Q(`pass`), C(t, `nav.pass`), e.sheet),
      ].join(``)));
    let labels = t === "ru" ? ["Квесты", "Календарь", "Событие", "Почта"] : ["Quests", "Calendar", "Event", "Mail"];
    let lq = this.root.querySelector("#lbl-q");
    if (lq) lq.textContent = labels[0];
    let lc = this.root.querySelector("#lbl-cal");
    if (lc) lc.textContent = labels[1];
    let le = this.root.querySelector("#lbl-ev");
    if (le) le.textContent = labels[2];
    let lm = this.root.querySelector("#lbl-mail");
    if (lm) lm.textContent = labels[3];
    let v = this.root.querySelector(`#joy`),
      y = this.root.querySelector(`#joy-knob`),
      b = e.input.joy;
    v.classList.toggle(`on`, b.active && !u),
      (v.style.left = `${b.px}px`),
      (v.style.top = `${b.py}px`),
      (y.style.transform = `translate(${b.x}px, ${b.y}px)`);
    let x = this.root.querySelector(`#hand`),
      ee = e.save.profile.tutorialStep === 0 && e.movedMs < 1500 && !u;
    x.classList.toggle(`on`, ee),
      (x.innerHTML = Q(`glove`)),
      b.active
        ? ((x.style.left = `${b.px + b.x}px`),
          (x.style.top = `${b.py + b.y}px`))
        : ((x.style.left = `62%`), (x.style.top = `68%`));
    let te = this.root.querySelector(`#joy-catch`);
    (te.style.pointerEvents = u ? `none` : `auto`),
      this.paintSheet(!1),
      this.paintToasts();
  }
  setSmall(e, t) {
    let n = this.root.querySelector(e)?.querySelector(`small`);
    n && (n.textContent = t);
  }
  setTravel(e) {
    let t = this.root.querySelector(`#travel`);
    e
      ? ((t.hidden = !1),
        (t.innerHTML = `<div class="travel-card"><div class="boat">${Q(`island`)}</div><p>${e}</p></div>`))
      : (t.hidden = !0);
  }
  floater(e, t) {
    let n = this.root.querySelector(`#floaters`);
    if (!n) return;
    let r = document.createElement(`div`);
    (r.className = `floater`),
      (r.textContent = e),
      t
        ? ((r.style.left = `${t.x}px`), (r.style.top = `${t.y}px`))
        : ((r.style.left = `${42 + Math.random() * 16}%`),
          (r.style.top = `${46 + Math.random() * 8}%`)),
      n.appendChild(r),
      setTimeout(() => r.remove(), 900);
  }
  flyCoin(e) {
    let t = this.root.querySelector(`#coin-chip`),
      n = this.root.querySelector(`#floaters`);
    if (!t || !n || !e) return;
    let r = t.getBoundingClientRect(),
      i = document.createElement(`div`);
    (i.className = `fly-coin`),
      (i.innerHTML = Q(`coin`)),
      (i.style.left = `${e.x}px`),
      (i.style.top = `${e.y}px`),
      n.appendChild(i);
    let a = r.left + r.width / 2 - e.x,
      o = r.top + r.height / 2 - e.y;
    i.animate(
      [
        { transform: `translate(0,0) scale(1)` },
        { transform: `translate(${a}px, ${o}px) scale(0.4)` },
      ],
      { duration: 520, easing: `cubic-bezier(.2,.7,.2,1)` },
    ),
      setTimeout(() => i.remove(), 540);
  }
  setLabels(e) {
    let t = this.root.querySelector(`#labels`);
    t ||
      ((t = document.createElement(`div`)),
      (t.id = `labels`),
      this.root.appendChild(t)),
      (t.innerHTML = e
        .map(
          (e) =>
            `<div class="wlab ${e.kind}" style="left:${e.x}px;top:${e.y}px">${$n(e.text)}</div>`,
        )
        .join(``));
  }
  paintToasts() {
    let e = this.root.querySelector(`#toasts`),
      t = performance.now();
    (this.game.toasts = this.game.toasts.filter((e) => t - e.at < 2800)),
      (e.innerHTML = this.game.toasts
        .map(
          (e) =>
            `<div class="toast"><span class="toast-ico">${e.icon ?? `✨`}</span><div><b>${e.title}</b>${e.detail ? `<small>${e.detail}</small>` : ``}</div></div>`,
        )
        .join(``));
  }
  paintSheet(e) {
    let t = `${this.game.sheet}|${this.game.sheetArg}|${this.game.revision}`;
    if (!e && t === this.sheetKey) return;
    this.sheetKey = t;
    let n = this.root.querySelector(`#sheet-wrap`);
    if (!this.game.sheet) {
      n.innerHTML = ``;
      return;
    }
    n.innerHTML = `<div class="sheet" data-block role="dialog">${this.sheetHtml().replace(/🪙/g, Q(`coin`)).replace(/🐚/g, Q(`shell`)).replace(/🎬/g, Q(`play`)).replace(/🎟/g, Q(`pass`))}</div>`;
    let r = n.querySelector(`#pname`);
    r?.addEventListener(`change`, () => void this.game.act(`rename`, r.value));
  }
  sheetHtml() {
    let e = this.game,
      t = e.lang,
      n = e.sheet,
      r = (e) =>
        `<header class="sheet-h"><h2>${e}</h2><button class="close" data-act="close" aria-label="close">${Q(`close`)}</button></header>`;
    return n === `map`
      ? r(C(t, `sheet.map`)) + rr(e)
      : n === `crew`
        ? r(C(t, `sheet.crew`)) + ir(e)
        : n === `island`
          ? r(C(t, `sheet.island`)) + ar(e)
          : n === `light`
            ? r(C(t, `sheet.light`)) + or(e)
            : n === `pass`
              ? r(C(t, `sheet.pass`)) + sr(e)
              : n === `quests`
                ? r(C(t, `sheet.quests`)) + lr(e)
                : n === `calendar`
                  ? r(C(t, `sheet.calendar`)) + ur(e)
                  : n === `event`
                    ? r(C(t, `sheet.event`)) + dr(e)
                    : n === `ach`
                      ? r(C(t, `sheet.ach`)) + fr(e)
                      : n === `cards`
                        ? r(C(t, `sheet.cards`)) + pr(e)
                        : n === `pause`
                          ? r(C(t, `sheet.pause`)) + mr(e)
                          : n === `profile`
                            ? r(C(t, `sheet.profile`)) + hr(e)
                            : n === `offline`
                              ? r(C(t, `sheet.offline`)) + gr(e)
                              : n === `mail`
                                ? r(C(t, `sheet.mail`)) + _r(e)
                                : n === `wheel`
                                  ? r(C(t, `sheet.wheel`)) + vr(e)
                                  : n === `chest`
                                    ? r(C(t, `sheet.chest`)) + yr(e)
                                    : n === `expedition`
                                      ? r(C(t, `sheet.expedition`)) + br(e)
                                      : n === `policy`
                                        ? r(C(t, `sheet.policy`)) +
                                          `<p class="body">${C(t, `policy.body`)}</p>${creditsHtml(t)}`
                                        : n === `fish`
                                          ? r(C(t, `sheet.fish`)) + xr(e)
                                          : n === `vip`
                                            ? r(C(t, `sheet.vip`)) + Sr(e)
                                            : n === `league`
                                              ? r(C(t, `sheet.league`)) + Cr(e)
                                              : n === `sail`
                                                ? r(C(t, `sail`)) + wr(e)
                                                : n === `turbo`
                                                  ? r(C(t, `turbo`)) + Tr(e)
                                                  : n === `intern`
                                                    ? r(C(t, `intern`)) + Er(e)
                                                    : n === `cosmetic`
                                                      ? r(C(t, `cosmetic`)) +
                                                        Dr(e)
                                                      : r(n || ``) + ``;
  }
};
function $(e, t, n, r) {
  return `<button class="nav-btn ${r === e ? `on` : ``}" data-act="${e === `island` && r === `island` ? `close` : `nav`}" data-id="${e}">${t}<small>${n}</small></button>`;
}
function tr(e, t, n) {
  let r = t.stationId ? n.stations.find((e) => e.id === t.stationId) : void 0,
    i = r ? nr(e, r.kind, r.item, n) : ``,
    a = Nn(n, t.itemId, e);
  return t.kind === `move`
    ? C(e, `goal.move`)
    : t.kind === `pickup`
      ? C(e, `goal.pickup`, { item: a })
      : t.kind === `drop`
        ? C(e, `goal.drop`, { item: a })
        : t.kind === `till`
          ? C(e, `goal.till`)
          : t.kind === `build`
            ? C(e, `goal.build`, { name: i, cost: w(t.cost ?? 0, e) })
            : t.kind === `upgrade`
              ? C(e, `goal.upgrade`, {
                  name: i,
                  cost: w(t.cost ?? 0, e),
                  level: t.level ?? 2,
                })
              : t.kind === `hire`
                ? C(e, `goal.hire`, { cost: w(t.cost ?? 0, e) })
                : t.kind === `chest`
                  ? C(e, `goal.chest`)
                  : t.kind === `turbo`
                    ? C(e, `goal.turbo`)
                    : t.kind === `quests`
                      ? C(e, `goal.quests`)
                      : t.kind === `sail`
                        ? C(e, `goal.sail`, { cost: w(t.cost ?? 0, e) })
                        : t.kind === `decor`
                          ? C(e, `goal.decor`, { cost: w(t.cost ?? 0, e) })
                          : C(e, `goal.play`);
}
function nr(e, t, n, r) {
  return n && (t === `producer` || t === `processor` || t === `stall`)
    ? `${Nn(r, n, e)} · ${C(e, `kind.` + t)}`
    : C(e, `kind.` + t);
}
function rr(e) {
  let t = e.lang;
  let d = "";
  for (let i = 0; i < D.length; i++) {
    let x = 22 + Math.sin(i * 0.9) * 18;
    let y = 36 + i * 78;
    d += (i ? " L " : "M ") + x + " " + y;
  }
  return `<div class="archipelago"><svg class="arch-path" viewBox="0 0 100 ${D.length * 78}" preserveAspectRatio="none"><path d="${d}" /></svg>${D.map((n, r) => {
    let i = e.save.islands[n.id - 1],
      a = U(e.save, n.id),
      here = e.save.profile.currentIsland === n.id,
      left = 22 + Math.sin(r * 0.9) * 18,
      top = 12 + r * 78,
      stars = i.unlocked ? "★".repeat(a) + "☆".repeat(3 - a) : t === "ru" ? "Закрыто" : "Locked",
      act = i.unlocked ? (here ? "nav" : "travel") : "sail-ask",
      id = i.unlocked ? (here ? "island" : String(n.id)) : String(n.id);
    return `<button class="isle ${here ? "here" : ""} ${i.unlocked ? "" : "locked"}" style="left:${left}%;top:${top}px" data-act="${act}" data-id="${id}">
      <span class="isle-blob" style="background:${n.ground}"></span>
      <span><b>${n.name[t]}</b><small>${stars}</small></span>
      ${here ? `<i class="isle-boat">⛵</i>` : ""}
    </button>`;
  }).join("")}</div>`;
}
function ir(e) {
  let t = e.lang,
    n = e.save.profile.currentIsland,
    r = It(e.save, n),
    i = e.save.islands[n - 1].crew.length,
    face = { bunny: "🐰", fox: "🦊", cat: "🐱", bear: "🐻", bird: "🦆", owl: "🦉", penguin: "🐧", pig: "🐷", goat: "🐐", crab: "🦀", capybara: "🐹", raccoon: "🦝" },
    perkLine = (helper, level) => {
      let s = 1 + 0.08 * (level - 1),
        p = helper.perk,
        bits = [],
        pct = (v) => Math.round(v * s * 100);
      if (p.serve) bits.push("+" + pct(p.serve) + "% " + (t === "ru" ? "скорость кассы" : "till speed"));
      if (p.speed) bits.push("+" + pct(p.speed) + "% " + (t === "ru" ? "скорость" : "speed"));
      if (p.prod) bits.push("+" + pct(p.prod) + "% " + (t === "ru" ? "производство" : "production"));
      if (p.income) bits.push("+" + pct(p.income) + "% " + (t === "ru" ? "доход" : "income"));
      if (p.lambda) bits.push("+" + pct(p.lambda) + "% " + (t === "ru" ? "гости" : "guests"));
      if (p.offline) bits.push("+" + pct(p.offline) + "% " + (t === "ru" ? "офлайн" : "offline"));
      if (p.cap) bits.push("+" + Math.max(1, Math.round((p.cap || 0) * s)) + " " + (t === "ru" ? "к рюкзаку" : "pack"));
      return bits.join(" · ");
    },
    a = e.save.helpers
      .map((h) => {
        let def = A(h.id);
        if (!def) return "";
        let slot = h.islandId === n
          ? (t === "ru" ? "На этом острове" : "On this island")
          : h.islandId
            ? (t === "ru" ? "Другой остров" : "Another island") + " · " + O(h.islandId).name[t]
            : (t === "ru" ? "Свободный слот" : "Open slot");
        return `<article class="card crew-card rarity-${def.rarity}">
      <div class="crew-top">
        <span class="avatar" style="background:${def.color};border-color:${def.accent}">${face[def.look] || "✨"}</span>
        <div>
          <h3>${def.name[t]}</h3>
          <p class="tags"><em class="badge rarity">${C(t, "rarity." + def.rarity)}</em> <em class="badge role">${C(t, "role." + def.role)}</em></p>
        </div>
      </div>
      <p class="perk">${perkLine(def, h.level)}</p>
      <p class="muted">${def.blurb[t]}</p>
      <p class="slot">${slot} · ${C(t, "level", { n: h.level })}</p>
      <div class="row">
        ${h.islandId === n ? `<button class="btn ghost" data-act="unassign" data-id="${h.id}">${C(t, "unassign")}</button>` : `<button class="btn" data-act="assign" data-id="${h.id}">${C(t, "assign")} · ${w(R(n, i + 1), t)} 🪙</button>`}
        <button class="btn ghost" data-act="level-helper" data-id="${h.id}">${C(t, "levelup")} · ${tt(h.level)} 🐚</button>
      </div>
    </article>`;
      })
      .join(""),
    o = Le.filter((def) => !e.save.helpers.some((h) => h.id === def.id))
      .slice(0, 8)
      .map((def) => `<p class="muted crew-locked"><span class="avatar mini" style="background:${def.color}">${face[def.look] || "✨"}</span> ${def.name[t]} · ${C(t, "rarity." + def.rarity)} · ${perkLine(def, 1)}</p>`)
      .join("");
  return `<p class="slot-line">${C(t, "slots", { used: i, max: r })}</p>${a}<h3>${C(t, "crew.none")}</h3>${o}`;
}
function ar(e) {
  let t = e.lang,
    n = e.save.profile.currentIsland,
    r = O(n),
    i = e.save.islands[n - 1],
    a = U(e.save, n);
  G(e.save, n, e.now);
  let o = r.stations
      .filter((e) => e.kind !== `hire`)
      .map((n) => {
        let a = i.stations[n.id],
          o = X(e.save, r, n),
          s = nr(t, n.kind, n.item, r),
          c = a.timer > 0 ? C(t, `timer.left`, { time: T(a.timer, t) }) : ``;
        return `<article class="card">
      <h3>${s}</h3>
      <p>${a.built ? C(t, `level`, { n: a.level }) : C(t, `locked`)} ${a.built ? `· ` + C(t, `prod`, { n: a.stock }) : ``} ${c}</p>
      ${
        a.timer > 0
          ? `<div class="row">
        <button class="btn" data-act="wait">${C(t, `no.ads`)}</button>
        <button class="btn reward" data-act="skip-ad" data-id="${n.id}">🎬 ${C(t, `timer.skip`)}</button>
      </div>`
          : ``
      }
      ${!a.built && o.kind !== `max` ? `<p>${w(o.cost, t)} 🪙</p>` : ``}
    </article>`;
      })
      .join(``),
    s = (1 + 0.5 * i.prestige).toFixed(1);
  return `<p>${r.name[t]}</p>
    <div class="pips" aria-label="${a}/3">${`●`.repeat(a)}${`○`.repeat(3 - a)}</div>
    ${o}
    <button class="btn ghost" data-act="nav" data-id="cosmetic">${C(t, `cosmetic`)}</button>
    ${n >= 6 ? `<button class="btn" data-act="prestige">${C(t, `prestige.do`)}</button><p class="muted">${C(t, `prestige.warn`, { mult: s })}</p>` : `<p class="muted">${C(t, `prestige.lock`)}</p>`}`;
}
function or(e) {
  let t = e.lang;
  return (
    C(t, `nav.light`),
    [
      {
        name: t === `ru` ? `Касса` : `Till`,
        desc: t === `ru` ? `+5% к доходу` : `+5% income`,
      },
      {
        name: t === `ru` ? `Прилив` : `Tide`,
        desc: t === `ru` ? `Дольше офлайн` : `Longer offline`,
      },
      {
        name: t === `ru` ? `Ветер` : `Wind`,
        desc: t === `ru` ? `+скорость и рюкзак` : `+speed and pack`,
      },
      {
        name: t === `ru` ? `Гости` : `Guests`,
        desc: t === `ru` ? `+поток гостей` : `+guests`,
      },
    ]
      .map((n, r) => {
        let i = Array.from({ length: 10 }, (t, n) =>
            e.save.lighthouse.includes(r * 10 + n),
          ).filter(Boolean).length,
          a = i < 10 ? r * 10 + i : -1,
          o = et(e.save.lighthouse.length),
          s = Array.from(
            { length: 10 },
            (e, t) => `<i class="${t < i ? `on` : ``}"></i>`,
          ).join(``);
        return `<section class="card light-row">
      <h3>${n.name}</h3>
      <p>${n.desc}</p>
      <div class="pips">${s}</div>
      ${a >= 0 ? `<button class="btn" data-act="light" data-id="${a}">${w(o, t)}</button>` : `<p>${t === `ru` ? `Готово` : `Maxed`}</p>`}
    </section>`;
      })
      .join(``) +
      `<p>${C(t, `income.offline`)}: ${T(G(e.save, 1, e.now).offlineCap, t)}</p>`
  );
}
function sr(e) {
  let t = e.lang,
    n = e.save.pass,
    r = n.level >= 30 ? 0 : it(n.level),
    i = Array.from({ length: 30 }, (e, t) => {
      let r = t + 1,
        i = n.level >= r,
        a = Ve(r, !1),
        o = Ve(r, !0);
      return `<article class="pass-card ${i ? `open` : ``}">
      <b>${r}</b>
      <button class="btn tiny" ${i && !n.claimed.includes(r) ? `` : `disabled`} data-act="pass" data-id="${r}">${cr(a)}</button>
      <button class="btn tiny reward" ${i && n.starUnlocked && !n.starClaimed.includes(r) ? `` : `disabled`} data-act="pass-star" data-id="${r}">${cr(o)}</button>
    </article>`;
    }).join(``),
    a = `${n.starTokens}/${S.starTokensToUnlock}`;
  return `<p>${C(t, `pass.level`, { n: n.level })} · XP ${n.xp}${r ? `/` + r : ``}</p>
    <p>${C(t, `pass.star`)}: ${a} ${n.starUnlocked ? `✓` : C(t, `pass.need`, { n: Math.max(0, S.starTokensToUnlock - n.starTokens) })}</p>
    <div class="row">
      <button class="btn">${C(t, `no.ads`)}</button>
      <button class="btn reward" data-act="rocket">🎬 ${C(t, `pass.rocket`)}</button>
    </div>
    ${n.overflowChests ? `<button class="btn" data-act="overflow">${C(t, `pass.overflow`)} ×${n.overflowChests}</button>` : ``}
    <div class="pass-track">${i}</div>`;
}
function cr(e) {
  return e.kind === `shells`
    ? `×${e.amount}`
    : e.kind === `key`
      ? `Key`
      : e.kind === `helper`
        ? `Friend`
        : e.kind === `cosmetic`
          ? `Hat`
          : `×${e.amount}`;
}
function lr(e) {
  let t = e.lang,
    n = (n, r) => {
      let i = n === `daily` ? e.save.quests.daily : e.save.quests.weekly;
      return (
        `<h3>${r}</h3>` +
        i
          .map((e, r) => {
            let i = e.progress >= e.target && !e.claimed;
            return `<article class="card">
        <p>${C(t, `quest.` + e.type, { n: Math.round(e.target), item: e.item ?? `` })}</p>
        <div class="bar"><span style="width:${Math.min(100, (e.progress / e.target) * 100)}%"></span></div>
        <p>${Math.floor(e.progress)}/${Math.round(e.target)}</p>
        ${i ? `<button class="btn" data-act="claim-quest" data-id="${n}:${r}">${C(t, `claim`)}</button>` : ``}
        ${e.claimed ? `<p>${C(t, `claimed`)}</p>` : ``}
        ${n === `daily` && !e.claimed ? `<div class="row"><button class="btn ghost" data-act="reroll-shells" data-id="${r}">${C(t, `reroll.shells`)}</button><button class="btn reward" data-act="reroll-ad" data-id="${r}">🎬 ${C(t, `reroll`)}</button></div>` : ``}
      </article>`;
          })
          .join(``)
      );
    },
    r =
      e.save.quests.daily.every((e) => e.claimed) &&
      !e.save.quests.dailyBonusClaimed
        ? `<button class="btn" data-act="daily-bonus">${C(t, `bonus.chest`)}</button>`
        : ``,
    i =
      e.save.quests.weekly.every((e) => e.claimed) &&
      !e.save.quests.weeklyBonusClaimed
        ? `<button class="btn" data-act="weekly-bonus">${C(t, `bonus.chest`)}</button>`
        : ``,
    a = O(e.save.profile.currentIsland)
      .mayor.map((n) => {
        let r = e.save.islands[e.save.profile.currentIsland - 1],
          i = r.mayorProgress[n.id] ?? 0,
          a = r.mayorClaimed.includes(n.id),
          o = n.item ? Nn(O(e.save.profile.currentIsland), n.item, t) : ``;
        return `<p>${a ? `✓` : ``} ${C(t, `mayor.` + n.type, { n: n.count, item: o })} · ${Math.min(n.count, Math.floor(i))}/${n.count}</p>`;
      })
      .join(``);
  return (
    n(`daily`, C(t, `daily`)) +
    r +
    n(`weekly`, C(t, `weekly`)) +
    i +
    `<h3>${C(t, `mayor`)}</h3>${a}`
  );
}
function ur(e) {
  let t = e.lang,
    n = e.save.login.lastClaimDay === e.dayKey;
  return `<div class="days">${Be.map((r, i) => {
    let a = e.save.login.cycle === i && !n,
      o = i < e.save.login.cycle || (i === e.save.login.cycle && n),
      s = r.amount ? `×${r.amount}` : r.label[t];
    return `<div class="day ${a ? `today` : ``} ${o ? `done` : ``} ${i === 6 ? `wide` : ``}">
      <div class="day-h">${t === `ru` ? `День` : `Day`} ${i + 1}</div>
      <div class="day-amt">${s}</div>
    </div>`;
  }).join(``)}</div>
    ${
      n
        ? `<p>${C(t, `claimed`)}</p>`
        : `<div class="row">
      <button class="btn" data-act="login">${C(t, `claim`)}</button>
      <button class="btn reward" data-act="login-x2">🎬 ${C(t, `claim.x2`)}</button>
    </div>`
    }
    <h3>${C(t, `album`)}</h3>
    <p>${C(t, `day`, { n: e.save.login.albumDay })} / 28</p>
    <div class="album">${Array.from({ length: 28 }, (t, n) => `<i class="${e.save.login.albumDay > n ? `on` : ``}"></i>`).join(``)}</div>`;
}
function dr(e) {
  let t = e.lang,
    n = H(e.now);
  if (!n) {
    let n = (Mt(e.now) - e.now) / 1e3,
      r = E[0];
    return `<p>${C(t, `event.soon`, { time: T(n, t) })}</p><article class="card"><h3>${r.name[t]}</h3><p>${r.blurb[t]}</p></article>`;
  }
  let r = ze
      .map((n, r) => {
        let i = e.save.events.claimedTiers.includes(r);
        return `<button class="btn tiny" ${e.save.events.tickets >= n && !i ? `` : `disabled`} data-act="event-tier" data-id="${r}">${C(t, `tier`, { n: r + 1 })} · ${n} 🎟 ${i ? `✓` : ``}</button>`;
      })
      .join(``),
    i =
      n.def.mechanic === `fishing`
        ? `<button class="btn" data-act="nav" data-id="fish">${C(t, `sheet.fish`)}</button>`
        : ``,
    a =
      n.def.mechanic === `race`
        ? `<button class="btn ghost" data-act="race-claim">${C(t, `claim.rank`)}</button>` +
          An(e.save, e.now)
            .slice(0, 8)
            .map(
              (e, n) =>
                `<p class="${e.you ? `you` : ``}">${n + 1}. ${e.you ? C(t, `you`) : e.name} · ${w(e.score, t)}</p>`,
            )
            .join(``)
        : ``;
  return `<article class="card"><h3>${n.def.name[t]}</h3><p>${n.def.blurb[t]}</p>
    <p>${C(t, `event.live`, { time: T((n.end - e.now) / 1e3, t) })} · ${C(t, `event.tickets`, { n: e.save.events.tickets })}</p></article>
    ${r}${i}${a}
    <button class="btn ghost" data-act="event-join">${C(t, `join`)}</button>`;
}
function fr(e) {
  let t = e.lang;
  return Dt.map((n) => {
    let r = e.save.achievements.includes(n.id);
    return `<article class="card ${r ? `here` : ``}"><h3>${r ? `✓ ` : ``}${n.name[t]}</h3><p>${n.desc[t]} · ${n.shells} 🐚</p></article>`;
  }).join(``);
}
function pr(e) {
  let t = e.lang,
    n = Lt(e.save);
  return (
    `<p>${C(t, `set.bonus`)} · ${n}/12</p>` +
    D.map((n) => {
      let r = n.cards
        .map((r) => {
          let i = e.save.collections.includes(r.id);
          return `<div class="post ${i ? `on` : ``}">${i ? C(t, `card.` + r.source, { island: n.name[t] }) : `?`}</div>`;
        })
        .join(``);
      return `<section class="card"><h3>${n.name[t]}</h3><div class="posts">${r}</div></section>`;
    }).join(``)
  );
}
function mr(e) {
  let t = e.lang,
    n = e.save.settings;
  return `<button class="btn" data-act="resume">${C(t, `resume`)}</button>
    <div class="card">
      <p>${C(t, `sound`)}</p><button class="btn ghost" data-act="toggle" data-id="sfx">${n.sfx ? C(t, `on`) : C(t, `off`)}</button>
      <p>${C(t, `music`)}</p><button class="btn ghost" data-act="toggle" data-id="music">${n.music ? C(t, `on`) : C(t, `off`)}</button>
      <p>${C(t, `language`)}</p>
      <div class="row"><button class="btn ${t === `ru` ? `` : `ghost`}" data-act="lang" data-id="ru">Русский</button><button class="btn ${t === `en` ? `` : `ghost`}" data-act="lang" data-id="en">English</button></div>
      <p>${C(t, `quality`)}</p>
      <div class="row wrap">
        ${[`auto`, `low`, `medium`, `high`].map((e) => `<button class="btn tiny ${n.quality === e ? `` : `ghost`}" data-act="quality" data-id="${e}">${C(t, `quality.` + e)}</button>`).join(``)}
      </div>
      <p class="muted">${C(t, `fps`, { n: Math.round(e.view?.fps() ?? 0) })}</p>
    </div>
    <button class="btn ghost" data-act="nav" data-id="profile">${C(t, `sheet.profile`)}</button>
    <button class="btn ghost" data-act="nav" data-id="ach">${C(t, `sheet.ach`)}</button>
    <button class="btn ghost" data-act="nav" data-id="cards">${C(t, `sheet.cards`)}</button>
    <button class="btn ghost" data-act="nav" data-id="policy">${C(t, `sheet.policy`)}</button>`;
}
function hr(e) {
  let t = e.lang,
    n = e.save.equipped.hat;
  return `<label>${C(t, `rename`)}<input id="pname" data-block value="${Or(e.save.profile.name)}" maxlength="16"></label>
    <p>${C(t, `stat.playtime`)}: ${T(e.save.profile.totalPlaytime, t)}</p>
    <p>${C(t, `stat.sales`)}: ${w(e.save.stats.sales, t)}</p>
    <p>${C(t, `stat.shells`)}: ${w(e.save.profile.shells, t)}</p>
    <p>${C(t, `stat.days`)}: ${e.save.stats.loginDays}</p>
    <p>${n ? `🎩 ` + n : ``}</p>`;
}
function gr(e) {
  let t = e.lang,
    n = Vn(e.save)
      .map(
        (e) =>
          `<p>${C(t, `offline.line`, { name: O(e.islandId).name[t], coins: w(e.coins, t) })}</p>`,
      )
      .join(``),
    r = e.welcome ? `<p class="banner">${C(t, `welcome`)}</p>` : ``;
  return n
    ? `${r}${n}<div class="row">
    <button class="btn" data-act="offline">${C(t, `claim`)}</button>
    <button class="btn reward" data-act="offline-x2">🎬 ${C(t, `claim.x2`)}</button>
  </div>`
    : `<p>${C(t, `empty.mail`)}</p>`;
}
function _r(e) {
  return gr(e);
}
function vr(e) {
  let t = e.lang,
    n = j.map((e) => `<li>${e.label[t]}</li>`).join(``);
  return `<div class="wheel" style="transform:rotate(${e.wheelAngle}deg)"><ul>${n}</ul></div>
    <div class="row">
      <button class="btn" ${e.save.wheel.freeUsed ? `disabled` : ``} data-act="spin-free">${C(t, `wheel.free`)}</button>
      <button class="btn reward" data-act="spin-ad">🎬 ${C(t, `wheel.ad`)}</button>
    </div>`;
}
function yr(e) {
  let t = e.lang;
  return !e.save.chest.openedOnce && e.save.profile.tutorialStep <= 8
    ? `<p>${C(t, `goal.chest`)}</p><button class="btn" data-act="chest-free">${C(t, `chest.open`)}</button>`
    : `<p>${C(t, `goal.chest`)}</p>
    <div class="row">
      <button class="btn" ${e.save.profile.keys <= 0 ? `disabled` : ``} data-act="chest-key">${C(t, `chest.key`)} · ${e.save.profile.keys}</button>
      <button class="btn reward" data-act="chest-ad">🎬 ${C(t, `chest.ad`)}</button>
    </div>`;
}
function br(e) {
  let t = e.lang,
    n = e.save.expeditions
      .filter((e) => !e.claimed)
      .map((n) => {
        let r = Math.max(0, (n.endsAt - e.now) / 1e3),
          i = A(n.helperId),
          a = r <= 0;
        return `<article class="card"><h3>${i?.name[t] ?? n.helperId}</h3>
      <p>${a ? C(t, `ready`) : T(r, t)} · ${n.shells} 🐚</p>
      ${a ? `<button class="btn" data-act="exp-claim" data-id="${n.id}">${C(t, `expedition.claim`)}</button>` : `<button class="btn reward" data-act="exp-skip" data-id="${n.id}">🎬 ${C(t, `expedition.skip`)}</button>`}
    </article>`;
      })
      .join(``),
    r = e.save.helpers
      .filter(
        (t) =>
          !e.save.expeditions.some((e) => !e.claimed && e.helperId === t.id),
      )
      .map(
        (e) => `<article class="card"><h3>${A(e.id)?.name[t]}</h3>
      <div class="row">
        <button class="btn tiny" data-act="exp-go" data-id="${e.id}:1">1${t === `ru` ? `ч` : `h`}</button>
        <button class="btn tiny" data-act="exp-go" data-id="${e.id}:4">4${t === `ru` ? `ч` : `h`}</button>
        <button class="btn tiny" data-act="exp-go" data-id="${e.id}:8">8${t === `ru` ? `ч` : `h`}</button>
      </div></article>`,
      )
      .join(``);
  return (n || `<p>${C(t, `empty.exp`)}</p>`) + r;
}
function xr(e) {
  let t = e.lang,
    n = 8 + ((e.fishT * 70) % 84);
  return `<p>${C(t, `fish.hint`)}</p>
    <div class="track"><div class="zone"></div><div class="fish" style="left:${n}%"></div></div>
    <button class="btn" data-act="fish-cast">${C(t, `fish.cast`)}</button>
    <p>${C(t, `casts`, { n: e.fishCasts })} · ${C(t, `fish.result`, { score: e.fishScore })}</p>
    <button class="btn reward" data-act="fish-extra">🎬 ${C(t, `extra.cast`)}</button>`;
}
function Sr(e) {
  let t = e.lang,
    n = e.save.vip;
  if (!n) return `<p>${C(t, `vip.lock`)}</p>`;
  let r = O(e.save.profile.currentIsland),
    i = n.have >= n.count;
  return `<p>${C(t, `vip.need`, { item: Nn(r, n.item, t), n: n.count })}</p>
    <p>${n.have}/${n.count} · ${T(Math.max(0, (n.expires - e.now) / 1e3), t)}</p>
    ${i ? `<div class="row"><button class="btn" data-act="vip">${C(t, `claim`)}</button><button class="btn reward" data-act="vip-x2">🎬 ${C(t, `vip.double`)}</button></div>` : ``}`;
}
function Cr(e) {
  let t = e.lang,
    n = Mn(e.save, e.now)
      .slice(0, 10)
      .map(
        (e, n) =>
          `<p class="${e.you ? `you` : ``}">${n + 1}. ${e.you ? C(t, `you`) : e.name} · ${w(e.score, t)}</p>`,
      )
      .join(``);
  return `<p class="muted">${C(t, `league.hint`)}</p>${n}`;
}
function wr(e) {
  let t = e.lang,
    n = Number(e.sheetArg || e.save.profile.currentIsland + 1),
    r = n - 1,
    i = vn(e.save, r),
    a = O(n).name[t];
  return `<p>${C(t, `sail.confirm`, { cost: w(i.cost, t), name: a })}</p>
    ${i.reason === `star` ? `<p>${C(t, `sail.needstar`)}</p>` : ``}
    <div class="row">
      <button class="btn ghost" data-act="close">${C(t, `back`)}</button>
      <button class="btn" ${i.ok ? `` : `disabled`} data-act="sail-yes" data-id="${r}">${C(t, `sail`)}</button>
    </div>`;
}
function Tr(e) {
  let t = e.lang,
    n = Math.max(0, (e.save.profile.turboUntil - e.now) / 1e3);
  return `<p>${n > 0 ? T(n, t) : C(t, `goal.turbo`)}</p>
    <div class="row">
      <button class="btn" data-act="turbo-shells">${C(t, `turbo.shells`)}</button>
      <button class="btn reward" data-act="turbo-ad">🎬 ${C(t, `turbo`)}</button>
    </div>
    ${e.save.profile.turboTickets ? `<button class="btn ghost" data-act="turbo-ticket">${C(t, `turbo.ticket`)} · ${e.save.profile.turboTickets}</button>` : ``}
    <button class="btn ghost" data-act="turbo-later">${C(t, `later`)}</button>`;
}
function Er(e) {
  let t = e.lang,
    n = Rn(e.save, e.now),
    r = e.save.profile.freeInternAt
      ? S.freeInternPeriod - (e.now - e.save.profile.freeInternAt) / 1e3
      : 0;
  return `<p>${C(t, `intern`)}</p>
    <div class="row">
      <button class="btn" ${n ? `` : `disabled`} data-act="intern-free">${n ? C(t, `intern.free`) : C(t, `intern.wait`, { time: T(r, t) })}</button>
      <button class="btn reward" data-act="intern-ad">🎬 ${C(t, `intern`)}</button>
    </div>`;
}
function Dr(e) {
  let t = e.lang;
  return Re.map((n) => {
    let r = e.save.cosmetics.includes(n.id),
      i = e.save.equipped[n.slot] === n.id;
    return `<article class="card"><h3>${n.name[t]}</h3>
      ${r ? `<button class="btn tiny" data-act="equip" data-id="${n.slot}:${n.id}">${i ? C(t, `equipped`) : C(t, `equip`)}</button>` : `<button class="btn tiny" data-act="buy-cos" data-id="${n.id}">${C(t, `buy`)} · ${n.cost} 🐚</button>`}
    </article>`;
  }).join(``);
}
function Or(e) {
  return e.replace(
    /[&<>"']/g,
    (e) =>
      ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[
        e
      ],
  );
}
function kr() {
  return (
    new URLSearchParams(location.search).get(`platform`) ||
    (window.YaGames
      ? `yandex`
      : window.CrazyGames
        ? `crazy`
        : window.PokiSDK
          ? `poki`
          : window.gdsdk
            ? `gamedistribution`
            : `web`)
  );
}
var Ar = class {
  save;
  runtime;
  view = null;
  ui = null;
  input = new ce();
  audio = new oe();
  analytics = new ae();
  ads;
  sheet = null;
  sheetArg = null;
  revision = 0;
  toasts = [];
  wheelAngle = 0;
  fishT = 0;
  fishCasts = 3;
  fishScore = 0;
  fishPerfects = 0;
  welcome = !1;
  autoplay = !1;
  started = !1;
  acc = 0;
  saveAcc = 0;
  last = 0;
  paused = !1;
  hiddenAt = 0;
  rng;
  saves;
  boatLatch = !1;
  chestLatch = !1;
  constructor(e, t, n) {
    (this.save = e),
      (this.saves = n),
      (this.rng = new z((e.profile.createdAt ^ Date.now()) >>> 0)),
      (this.runtime = new Yn(
        e,
        e.profile.currentIsland,
        this.rng.next() * 1e9,
      )),
      (this.ads = new ye(
        ve(t, {
          onOpen: () => {
            this.audio.suspendForAd(!0), this.view?.engine.stopRenderLoop();
          },
          onClose: () => {
            this.audio.suspendForAd(!1),
              this.view &&
                !this.paused &&
                this.view.engine.runRenderLoop(() => this.frame());
          },
        }),
        e,
        {
          pause: () => {
            this.paused = !0;
          },
          resume: () => {
            this.paused = !1;
          },
          toast: (e) => this.toast(C(this.lang, e)),
        },
      ));
  }
  get lang() {
    return this.save.settings.lang;
  }
  get now() {
    return Date.now();
  }
  get dayKey() {
    return V(this.now);
  }
  async start(e, t) {
    this.ads.loadingStart(), await this.ads.init();
    let n = Wt(this.save, this.now, await this.ads.serverNow());
    (this.welcome = n.welcome),
      Kt(this.save, this.now),
      (this.save.profile.sessions += 1),
      this.analytics.track(`session_start`, {
        platform: this.ads.platform,
        day: Math.floor((this.now - this.save.profile.createdAt) / 864e5),
      }),
      (this.view = await wt.create(e, this.save.settings.quality)),
      await this.view.preload(t),
      await this.view.loadIsland(this.save),
      (this.ui = new er(this, document.body)),
      this.ui.mount(),
      this.input.attach(this.ui.root.querySelector(`#joy-catch`)),
      this.audio.setMusic(this.save.settings.music),
      this.audio.setSfx(this.save.settings.sfx),
      this.ads.loadingStop(),
      (this.last = performance.now()),
      this.view.engine.runRenderLoop(() => this.frame()),
      window.addEventListener(`resize`, () => this.view?.resize()),
      document.addEventListener(`visibilitychange`, () => this.onHide()),
      window.addEventListener(
        `pointerdown`,
        () => {
          (this.gestured = !0), this.firstGesture();
        },
        { once: !1 },
      ),
      window.addEventListener(`keydown`, (e) => {
        e.code === `Escape` && this.sheet && this.close();
      }),
      n.seconds > 50 &&
        n.lines.some((e) => e.coins > 1) &&
        this.open(`offline`),
      this.analytics.track(`perf_sample`, {
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      });
  }
  firstGesture() {
    this.audio.unlock(),
      this.started || ((this.started = !0), this.ads.gameplayStart());
  }
  frame() {
    let e = performance.now(),
      t = (e - this.last) / 1e3;
    (this.last = e), t > 0.25 && (t = 0.25);
    let n = this.view;
    if (!n) return;
    n.sampleFps(t);
    let r =
        this.paused || this.sheet === `pause`
          ? `pause`
          : this.sheet
            ? `menu`
            : `play`,
      i = 0,
      a = 0;
    if (r === `play`) {
      let e = this.input.axis();
      if (this.autoplay) {
        let t = this.runtime.suggestTarget(),
          r = t.x - this.runtime.px,
          i = t.z - this.runtime.pz,
          a = Math.hypot(r, i) || 1;
        if (a > 0.35) {
          let t = n.axes(),
            o = r / a,
            s = i / a;
          e = { x: o * t.rx + s * t.rz, y: -(o * t.fx + s * t.fz) };
        } else e = { x: 0, y: 0 };
      }
      let r = n.axes();
      (i = r.rx * e.x + r.fx * -e.y),
        (a = r.rz * e.x + r.fz * -e.y),
        i * i + a * a > 0.04 && (this.movedMs += t * 1e3);
    }
    this.input.zoom && n.zoom(this.input.zoom), (this.acc += t);
    let o = 1 / S.simHz,
      s = !1;
    for (; this.acc >= o; ) {
      let e = this.runtime.px;
      this.runtime.tick(
        o,
        i,
        a,
        this.now,
        r === `pause` ? `pause` : r === `menu` ? `menu` : `play`,
      ),
        Math.hypot(this.runtime.px - e, this.runtime.pz - this.runtime.pz) >
          0.01 && (s = !0),
        (this.acc -= o);
    }
    this.consumeSim(s);
    if (this.runtime.moving && this.runtime.pz > 7.2 && Math.abs(this.runtime.px) < 2.1) {
      this.splashAcc = (this.splashAcc || 0) + t;
      if (this.splashAcc > 0.62) (this.splashAcc = 0), this.audio.splash();
    }
    let c = xn(this.save),
      l = Ft(this.save, 2);
    n.sync(this.runtime, t, c, l),
      this.paintLabels(l),
      n.render(t),
      this.ui?.update(),
      this.audio.tick(),
      r === `play` && this.ads.tick(t),
      (this.saveAcc += t),
      this.saveAcc > S.saveEvery &&
        ((this.saveAcc = 0),
        (this.save.profile.lastSeen = this.now),
        this.saves.write(this.save)),
      this.input.esc && this.sheet && this.close(),
      this.input.endFrame(),
      (this.fishT += t);
  }
  consumeSim(e) {
    let t = this.runtime.fx.some((e) => e.type === `drop`),
      n =
        this.runtime.notes.some((e) => e.kind === `toast`) ||
        (this.save.stats.customers > 0 &&
          this.runtime.fx.some((e) => e.type === `ding`));
    for (let e of this.runtime.fx) {
      if (
        (e.type === `pop` && this.audio.pop(e.amount ?? 1),
        e.type === `drop` && this.audio.drop(),
        (e.type === `ding` || e.type === `text`) && (this.audio.coin(), e.text))
      ) {
        let t = this.view?.project(e.x, 1.1, e.z);
        this.ui?.floater(e.text, t ?? void 0),
          this.ui?.flyCoin(t ?? void 0),
          this.buzz(12);
      }
      e.type === `pop` && this.buzz(8),
        (e.type === `build` || e.type === `confetti`) &&
          (this.audio.build(), this.view?.shake(0.15), this.buzz(24)),
        e.type === `fanfare` && this.audio.fanfare();
    }
    let r = this.runtime.notes.splice(0);
    this.showNotes(r);
    let i = this.runtime.island.crew.length > 0;
    Sn(this.save, {
      moved: e,
      stack: this.runtime.stackCount,
      dropped: t,
      served: this.runtime.fx.some((e) => e.type === `ding`) || n,
      hired: i,
      chestOpened: this.save.chest.openedOnce,
      turboDismissed: this.save.profile.tutorialStep !== B.Turbo,
    }) &&
      (this.analytics.track(`tutorial_step`, {
        step_id: this.save.profile.tutorialStep,
        time_from_start: this.save.profile.totalPlaytime,
      }),
      this.save.profile.tutorialStep === B.Done &&
        this.analytics.track(`tutorial_complete`, {
          total_time: this.save.profile.totalPlaytime,
        }),
      this.revision++),
      this.save.profile.tutorialStep === B.Free &&
        this.save.profile.totalPlaytime >= 900 &&
        ((this.save.profile.tutorialStep = B.Quests),
        this.toast(C(this.lang, `goal.quests`)),
        this.revision++);
    let a = Math.hypot(this.runtime.px - 3.15, this.runtime.pz - 11.6) < 1.6;
    a &&
      !this.boatLatch &&
      !this.sheet &&
      this.save.profile.tutorialStep >= B.Done &&
      ((this.boatLatch = !0), this.open(`map`)),
      a || (this.boatLatch = !1);
    let o = Math.hypot(this.runtime.px - -1.15, this.runtime.pz - 9.2) < 1.5;
    o &&
      this.save.chest.spawned &&
      !this.chestLatch &&
      !this.sheet &&
      ((this.chestLatch = !0), this.open(`chest`)),
      o || (this.chestLatch = !1),
      r.some((e) => e.kind === `star` && e.stars === 1) &&
        (this.toast(C(this.lang, `first.star`)),
        this.analytics.track(`island_star`, {
          island_id: this.save.profile.currentIsland,
          stars: 1,
          playtime_total: this.save.profile.totalPlaytime,
        }));
  }
  showNotes(e) {
    for (let t of e) {
      if (t.kind === `achievement` && t.id) {
        let e = Dt.find((e) => e.id === t.id),
          n = e ? e.name[this.lang] : C(this.lang, `sheet.ach`);
        this.toast(n, { icon: `🏆`, detail: e ? `+${e.shells} 🐚` : void 0 }),
          this.analytics.track(`achievement_unlock`, { id: t.id }),
          this.audio.fanfare();
      }
      t.kind === `star` &&
        (this.toast(C(this.lang, `star.toast`, { n: t.stars ?? 1 })),
        this.view?.cheer()),
        t.kind === `card` && this.toast(C(this.lang, `card.new`)),
        t.kind === `mayor` && this.toast(C(this.lang, `mayor`));
    }
  }
  toast(e, t) {
    this.toasts.push({
      title: e,
      icon: t?.icon,
      detail: t?.detail,
      at: performance.now(),
    });
  }
  islandStock(e) {
    return this.runtime.island.stations[e]?.stock ?? 0;
  }
  labelBlocked(e, t) {
    let n = window.innerWidth,
      r = window.innerHeight;
    return (
      t < 78 || t > r - 148 || (e < 74 && t < 300) || (e > n - 74 && t < 300)
    );
  }
  gestured = !1;
  movedMs = 0;
  buzz(e) {
    if (this.gestured)
      try {
        navigator.vibrate?.(e);
      } catch {}
  }
  paintLabels(e) {
    let t = this.view;
    if (!t || !this.ui) return;
    let n = [];
    if (this.sheet) {
      this.ui.setLabels(n);
      return;
    }
    for (let r of e) r;
    for (let e of this.runtime.customers.slice(0, 8)) {
      let r = t.project(e.x, 1.45, e.z);
      r &&
        !this.labelBlocked(r.x, r.y) &&
        n.push({ ...r, text: e.item ? goodEmoji(e.item) : `💭`, kind: `bubble` });
    }
    let r = this.runtime.def.stations.find((e) => e.kind === `till`);
    if (r) {
      let e = t.project(r.x, 1.7, r.z);
      e &&
        !this.labelBlocked(e.x, e.y) &&
        n.push({ ...e, text: `💳`, kind: `icon` });
    }
    for (let e of this.runtime.def.stations) {
      if (!e.item || (e.kind !== `producer` && e.kind !== `stall`)) continue;
      let r = this.runtime.island.stations[e.id];
      if (!r?.built) continue;
      let i = t.project(e.x, e.kind === `stall` ? 2.15 : 1.15, e.z);
      if (!i || this.labelBlocked(i.x, i.y)) continue;
      let a = goodEmoji(e.item);
      n.push({ ...i, text: `${a} ${r.stock}`, kind: `icon` });
    }
    this.ui.setLabels(n);
  }
  open(e, t = null) {
    if (
      (e === `pause` && this.ads.beginPause(),
      (this.sheet = e),
      (this.sheetArg = t),
      this.revision++,
      e === `quests` &&
        this.save.profile.tutorialStep === B.Quests &&
        (this.save.profile.tutorialStep = B.Done),
      e === `event`)
    ) {
      let e = this.save.events.weekKey;
      e &&
        this.save.profile.eventJoinedWeek !== e &&
        ((this.save.profile.eventJoinedWeek = e),
        (this.save.stats.eventsJoined += 1),
        this.analytics.track(`event_join`, { event_id: e }),
        this.showNotes(J(this.save)));
    }
  }
  close() {
    let e = this.sheet;
    (this.sheet = null),
      (this.sheetArg = null),
      this.revision++,
      this.ui?.update(),
      e === `pause` && this.ads.midgame(`pause_resume`),
      (e === `fish` || e === `event`) && this.ads.midgame(`event_end`);
  }
  async act(e, t) {
    this.audio.click();
    let n = this.now;
    if (e === `close`) return this.close();
    if (e === `nav`) {
      if (t === `island` && this.sheet === `island`) return this.close();
      if (!t) return;
      this.open(t);
    } else if (e === `resume`) this.close();
    else if (e === `lang` && (t === `ru` || t === `en`))
      (this.save.settings.lang = t),
        this.analytics.track(`settings_change`, { key: `lang`, value: t }),
        this.revision++;
    else if (e === `quality` && t)
      (this.save.settings.quality = t),
        this.view?.setQuality(t),
        this.analytics.track(`settings_change`, { key: `quality`, value: t }),
        this.revision++;
    else if (e === `toggle` && t)
      t === `music` &&
        ((this.save.settings.music = !this.save.settings.music),
        this.audio.setMusic(this.save.settings.music)),
        t === `sfx` &&
          ((this.save.settings.sfx = !this.save.settings.sfx),
          this.audio.setSfx(this.save.settings.sfx)),
        this.revision++;
    else if (e === `rename` && t) this.save.profile.name = t.slice(0, 16);
    else if (e === `sail-ask` && t) this.open(`sail`, t);
    else if (e === `sail-yes` && t) {
      let e = Number(t);
      if (!yn(this.save, e)) {
        this.toast(C(this.lang, `not.enough`));
        return;
      }
      this.analytics.track(`island_unlock`, {
        island_id: e + 1,
        playtime_total: this.save.profile.totalPlaytime,
      }),
        await this.travel(e + 1, !0);
    } else if (e === `travel` && t) await this.travel(Number(t), !1);
    else if (e === `assign` && t)
      on(this.save, t, this.save.profile.currentIsland)
        ? (this.analytics.track(`helper_hire`, { helper_id: t }),
          this.showNotes(J(this.save)))
        : this.toast(C(this.lang, `not.enough`)),
        this.revision++;
    else if (e === `unassign` && t) sn(this.save, t), this.revision++;
    else if (e === `level-helper` && t)
      cn(this.save, t)
        ? this.showNotes(q(this.save, { type: `helperlevel` }, n))
        : this.toast(C(this.lang, `not.enough`)),
        this.revision++;
    else if (e === `light` && t)
      ln(this.save, Number(t))
        ? this.showNotes(J(this.save))
        : this.toast(C(this.lang, `not.enough`)),
        this.revision++;
    else if (e === `claim-quest` && t) {
      let [e, n] = t.split(`:`);
      (e === `daily` || e === `weekly`) &&
        en(this.save, e, Number(n)) &&
        (this.audio.fanfare(),
        this.analytics.track(`quest_complete`, { type: e, quest_id: t })),
        this.revision++;
    } else if (e === `daily-bonus`)
      tn(this.save) && this.audio.chest(), this.revision++;
    else if (e === `weekly-bonus`)
      nn(this.save, this.rng) && this.audio.fanfare(), this.revision++;
    else if (e === `reroll-shells` && t)
      this.save.profile.shells < 10
        ? this.toast(C(this.lang, `not.enough`))
        : ((this.save.profile.shells -= 10), rn(this.save, Number(t), n)),
        this.revision++;
    else if (e === `reroll-ad` && t)
      (await this.reward(`reroll_quest`)) && rn(this.save, Number(t), n),
        this.revision++;
    else if (e === `login`)
      an(this.save, n, !1) &&
        (this.analytics.track(`login_reward_claim`, {
          day_index: this.save.login.cycle,
          doubled: !1,
        }),
        this.audio.fanfare()),
        this.revision++;
    else if (e === `login-x2`)
      (await this.reward(`login_x2`)) &&
        (an(this.save, n, !0),
        this.analytics.track(`login_reward_claim`, {
          day_index: this.save.login.cycle,
          doubled: !0,
        })),
        this.revision++;
    else if (e === `pass` && t)
      dn(this.save, Number(t), !1) && this.audio.fanfare(), this.revision++;
    else if (e === `pass-star` && t)
      dn(this.save, Number(t), !0) && this.audio.fanfare(), this.revision++;
    else if (e === `rocket`)
      (await this.reward(`pass_rocket`)) &&
        (pn(this.save),
        this.analytics.track(`pass_level`, {
          season: this.save.pass.season,
          level: this.save.pass.level,
          via_ad: !0,
        })),
        this.revision++;
    else if (e === `overflow`)
      mn(this.save) && this.audio.chest(), this.revision++;
    else if (e === `offline`) {
      let e = Gt(this.save, !1);
      this.analytics.track(`offline_collect`, {
        minutes: 0,
        amount: e,
        doubled: !1,
      }),
        this.audio.coin(),
        this.close(),
        await this.ads.midgame(`offline_return`);
    } else if (e === `offline-x2`) {
      if (await this.reward(`offline_x2`)) {
        let e = Gt(this.save, !0);
        this.analytics.track(`offline_collect`, {
          minutes: 0,
          amount: e,
          doubled: !0,
        }),
          this.audio.fanfare(),
          this.close();
      }
    } else {
      if (e === `turbo-open`) return this.open(`turbo`);
      if (e === `intern-open`) return this.open(`intern`);
      if (e === `turbo-later`)
        this.save.profile.tutorialStep === B.Turbo &&
          (this.save.profile.tutorialStep = B.Free),
          this.close();
      else if (e === `turbo-ad`)
        (await this.reward(`turbo`)) && In(this.save, n), this.revision++;
      else if (e === `turbo-shells`)
        this.save.profile.shells < S.turboShellCost
          ? this.toast(C(this.lang, `not.enough`))
          : ((this.save.profile.shells -= S.turboShellCost), In(this.save, n)),
          this.revision++;
      else if (e === `turbo-ticket`)
        this.save.profile.turboTickets > 0 &&
          (this.save.profile.turboTickets--, In(this.save, n)),
          this.revision++;
      else if (e === `intern-ad`)
        (await this.reward(`intern`)) && Ln(this.save, n, !1), this.revision++;
      else if (e === `intern-free`)
        Rn(this.save, n) && Ln(this.save, n, !0), this.revision++;
      else if (e === `chest-free` || e === `chest-key` || e === `chest-ad`) {
        if (e === `chest-key`) {
          if (this.save.profile.keys <= 0) return;
          this.save.profile.keys--;
        }
        if (e === `chest-ad` && !(await this.reward(`chest`))) return;
        let t = wn(this.save, this.rng, n);
        if (
          (this.showNotes(q(this.save, { type: `chest` }, n)),
          this.audio.chest(),
          this.toast(
            `${t.coins ? t.coins + ` 🪙 ` : ``}${t.shells ? t.shells + ` 🐚` : ``}`,
          ),
          t.helper)
        ) {
          let e = A(t.helper);
          e &&
            this.toast(C(this.lang, `helper.new`, { name: e.name[this.lang] }));
        }
        this.save.profile.tutorialStep === B.Chest &&
          (this.save.profile.tutorialStep = B.Turbo),
          this.close();
      } else if (e === `spin-free` || e === `spin-ad`) {
        if (
          (e === `spin-free` && this.save.wheel.freeUsed) ||
          (e === `spin-ad` && !(await this.reward(`wheel`)))
        )
          return;
        e === `spin-free` && (this.save.wheel.freeUsed = !0);
        let { index: t, jackpot: r } = Cn(this.save, this.rng, n);
        (this.wheelAngle += 1080 + t * 45),
          r &&
            (this.toast(C(this.lang, `lucky`)), this.showNotes(J(this.save))),
          this.audio.fanfare(),
          this.revision++;
      } else if (e === `exp-go` && t) {
        let [e, r] = t.split(`:`),
          i = Number(r);
        Tn(this.save, e, i, n) || this.toast(C(this.lang, `exp.busy`)),
          this.revision++;
      } else if (e === `exp-claim` && t)
        En(this.save, t, n) && this.audio.fanfare(), this.revision++;
      else if (e === `exp-skip` && t)
        (await this.reward(`expedition_skip`)) && Dn(this.save, t),
          this.revision++;
      else if (e === `event-tier` && t)
        kn(this.save, Number(t)) &&
          (this.audio.fanfare(),
          this.analytics.track(`event_reward`, {
            event_id: this.save.events.weekKey,
            tier: Number(t),
          })),
          this.revision++;
      else if (e === `event-join`) this.revision++;
      else if (e === `race-claim`) {
        let e = jn(this.save, n);
        e >= 0 &&
          (this.toast(C(this.lang, `place`, { n: e + 1 })),
          this.showNotes(J(this.save))),
          this.revision++;
      } else if (e === `fish-cast`) {
        if (this.fishCasts <= 0) return;
        this.fishCasts--;
        let e = 8 + ((this.fishT * 70) % 84),
          t = e > 42 && e < 52,
          n = e > 34 && e < 62,
          r = t ? 8 : n ? 4 : 1;
        t && this.fishPerfects++,
          (this.fishScore += r),
          this.toast(C(this.lang, t ? `perfect` : n ? `good` : `miss`)),
          this.fishCasts === 0 &&
            (On(this.save, this.fishScore, this.fishPerfects),
            this.showNotes(J(this.save)),
            (this.fishCasts = 3),
            (this.fishScore = 0),
            (this.fishPerfects = 0)),
          this.revision++;
      } else if (e === `fish-extra`)
        (await this.reward(`minigame_extra`)) && this.fishCasts++,
          this.revision++;
      else if (e === `vip`)
        Bn(this.save, !1) && this.audio.fanfare(), this.revision++;
      else if (e === `vip-x2`)
        (await this.reward(`vip_x2`)) && Bn(this.save, !0), this.revision++;
      else if (e === `skip-ad` && t)
        (await this.reward(`skip_timer`)) &&
          this.showNotes(
            _n(this.save, this.save.profile.currentIsland, t, `ad`, n),
          ),
          this.revision++;
      else if (e === `prestige`)
        bn(this.save, this.save.profile.currentIsland) &&
          (this.analytics.track(`prestige`, {
            island: this.save.profile.currentIsland,
            count: this.save.stats.prestiges,
          }),
          this.showNotes(J(this.save)),
          this.audio.fanfare(),
          await this.view?.loadIsland(this.save)),
          this.revision++;
      else if (e === `buy-cos` && t)
        un(this.save, t)
          ? this.showNotes(J(this.save))
          : this.toast(C(this.lang, `not.enough`)),
          this.revision++;
      else if (e === `equip` && t) {
        let [e, n] = t.split(`:`);
        (e === `hat` || e === `trail` || e === `frame`) &&
          (this.save.equipped[e] = n ?? null),
          this.revision++;
      }
    }
  }
  async reward(e) {
    this.analytics.track(`ad_rewarded_offer`, {
      placement: e,
      island: this.save.profile.currentIsland,
    }),
      this.analytics.track(`ad_rewarded_start`, { placement: e });
    let t = await this.ads.showRewarded(e);
    return (
      this.analytics.track(t ? `ad_rewarded_complete` : `ad_rewarded_fail`, {
        placement: e,
      }),
      t && this.audio.fanfare(),
      t
    );
  }
  async travel(e, t) {
    let n = O(e);
    this.close(),
      this.ui?.setTravel(
        C(this.lang, `loading.travel`, { name: n.name[this.lang] }),
      ),
      this.ads.gameplayStop(),
      t &&
        (this.analytics.track(`ad_midgame_request`, {
          reason: `island_travel`,
        }),
        await this.ads.midgame(`island_travel`)),
      (this.save.profile.currentIsland = e),
      (this.save.profile.playerX = 0.2),
      (this.save.profile.playerZ = 3.6),
      (this.runtime = new Yn(this.save, e, this.rng.next() * 1e9)),
      await this.view?.loadIsland(this.save),
      this.ui?.setTravel(null),
      this.ads.gameplayStart();
  }
  onHide() {
    document.hidden
      ? ((this.hiddenAt = Date.now()),
        this.view?.engine.stopRenderLoop(),
        this.audio.suspendForAd(!0),
        (this.save.profile.lastSeen = this.now),
        this.saves.write(this.save),
        this.analytics.track(`session_end`, {
          session_len: this.ads.memory.playtime,
        }))
      : (this.audio.suspendForAd(!1),
        (this.last = performance.now()),
        this.view?.engine.runRenderLoop(() => this.frame()),
        Date.now() - this.hiddenAt > 8e3 &&
          Wt(this.save, this.now).lines.some((e) => e.coins > 1) &&
          this.open(`offline`));
  }
  debug = {
    addCoins: (e) => {
      (this.runtime.island.coins += e), this.revision++;
    },
    addShells: (e) => {
      this.save.profile.shells += e;
    },
    skipTutorial: () => {
      (this.save.profile.tutorialStep = B.Done), this.revision++;
    },
    open: (e) => this.open(e),
    close: () => this.close(),
    autoplay: (e) => {
      this.autoplay = e;
    },
    unlockAll: () => {
      for (let e of this.save.islands) e.unlocked = !0;
      this.revision++;
    },
    island: async (e) => {
      let t = this.save.islands[e - 1];
      t && (t.unlocked = !0),
        (this.save.profile.tutorialStep = 11),
        await this.travel(e, !1);
      for (let e of this.runtime.def.stations) {
        let t = this.runtime.island.stations[e.id];
        t &&
          e.kind !== `decor` &&
          e.kind !== `hire` &&
          e.kind !== `backpack` &&
          ((t.built = !0),
          (e.kind === `producer` ||
            e.kind === `stall` ||
            e.kind === `processor`) &&
            (t.stock = 6));
      }
      (this.runtime.px = 0.2), (this.runtime.pz = 0.6);
      let n = this.runtime.def.customers;
      this.runtime.customers.push(
        {
          id: 700 + e,
          kind: n[0],
          x: 1.4,
          z: 1.8,
          state: `toStall`,
          stallId: ``,
          item: null,
          order: 1,
          timer: 0,
          rare: !1,
        },
        {
          id: 720 + e,
          kind: n[1] ?? n[0],
          x: -1.2,
          z: 2.6,
          state: `toStall`,
          stallId: ``,
          item: null,
          order: 2,
          timer: 0,
          rare: !1,
        },
      ),
        this.revision++;
    },
    prep: (e) => {
      this.save.profile.tutorialStep = 11;
      let t = this.runtime.island,
        n = t.stations.stall_carrot,
        r = t.stations.field_carrot;
      if ((r && (r.stock = 8), n && (n.stock = 5), e === `early`))
        (t.coins = 48),
          (this.runtime.px = 1.35),
          (this.runtime.pz = 2.15),
          (this.runtime.yaw = Math.atan2(3.15 - 1.35, 2.6 - 2.15)),
          this.runtime.customers.push(
            {
              id: 901,
              kind: `bunny`,
              x: 2.2,
              z: 1.3,
              state: `toStall`,
              stallId: `stall_carrot`,
              item: null,
              order: 1,
              timer: 0,
              rare: !1,
            },
            {
              id: 902,
              kind: `fox`,
              x: 2.5,
              z: 4.4,
              state: `queue`,
              stallId: `stall_carrot`,
              item: `carrot`,
              order: 2,
              timer: 0,
              rare: !1,
            },
          );
      else {
        for (let e of this.runtime.def.stations)
          if (
            e.item === `carrot` ||
            e.item === `cabbage` ||
            e.kind === `till`
          ) {
            let n = t.stations[e.id];
            if (!n) continue;
            (n.built = !0),
              (n.level = Math.max(n.level, 3)),
              e.kind === `stall` && (n.stock = 6);
          }
        t.coins = 640;
        for (let e of [`stepa`, `alisa`]) {
          let n = this.save.helpers.find((t) => t.id === e);
          n &&
            !t.crew.includes(e) &&
            ((n.islandId = this.save.profile.currentIsland), t.crew.push(e));
        }
        (this.runtime.px = 0.4),
          (this.runtime.pz = 0.4),
          (this.runtime.yaw = 0.4),
          this.runtime.customers.push(
            {
              id: 911,
              kind: `bunny`,
              x: 1.6,
              z: -0.2,
              state: `toStall`,
              stallId: `stall_cabbage`,
              item: null,
              order: 1,
              timer: 0,
              rare: !1,
            },
            {
              id: 912,
              kind: `bear`,
              x: 2.4,
              z: 1.6,
              state: `queue`,
              stallId: `stall_carrot`,
              item: `carrot`,
              order: 2,
              timer: 0,
              rare: !1,
            },
            {
              id: 913,
              kind: `fox`,
              x: 2.6,
              z: 3.4,
              state: `toTill`,
              stallId: `stall_carrot`,
              item: `carrot`,
              order: 3,
              timer: 0,
              rare: !0,
            },
          );
      }
      this.revision++;
    },
    rehearse: (e = 90) => {
      let t = [],
        n = () => {
          let e = this.runtime.def.stations.find(
              (e) => e.id === `field_cabbage`,
            ),
            t = this.runtime.def.stations.find((e) => e.kind === `hire`);
          return e &&
            !this.runtime.island.stations.field_cabbage?.built &&
            this.runtime.island.coins >= 120
            ? e
            : t &&
                this.save.profile.tutorialStep >= 6 &&
                this.runtime.island.crew.length === 0 &&
                this.runtime.island.coins >= 100
              ? t
              : this.runtime.suggestTarget();
        };
      for (let t = 0; t < e; t += 0.1) {
        let e = n(),
          t = e.x - this.runtime.px,
          r = e.z - this.runtime.pz,
          i = Math.hypot(t, r) || 1,
          a = i < 0.3 ? 0 : t / i,
          o = i < 0.3 ? 0 : r / i;
        this.runtime.tick(0.1, a, o, Date.now(), `play`),
          Sn(this.save, {
            moved: a !== 0,
            stack: this.runtime.stackCount,
            dropped: this.runtime.fx.some((e) => e.type === `drop`),
            served: this.runtime.fx.some((e) => e.type === `ding`),
            hired: this.runtime.island.crew.length > 0,
            chestOpened: this.save.chest.openedOnce,
            turboDismissed: !1,
          }),
          (this.runtime.fx.length = 0),
          (this.runtime.notes.length = 0);
      }
      return (
        t.push(
          `step ${this.save.profile.tutorialStep} coins ${Math.floor(this.runtime.island.coins)} crew ${this.runtime.island.crew.join(`,`) || `-`} cabbage ${this.runtime.island.stations.field_cabbage?.built}`,
        ),
        t.join(` | `)
      );
    },
    forceBuild: () => {
      let e = this.runtime.island;
      for (let t of this.runtime.def.stations)
        t.star && (e.stations[t.id].built = !0);
      this.revision++, this.view?.loadIsland(this.save);
    },
  };
};
async function jr() {
  let e = kr(),
    t = new Jn(Hn(), void 0),
    n;
  try {
    n = await t.load();
  } catch {
    n = Pt();
  }
  let r = new Ar(n, e, t),
    i = document.querySelector(`#c`),
    a = document.querySelector(`#boot-bar`),
    o = performance.now();
  await r.start(i, (e) => {
    a && (a.style.width = `${Math.round(e * 100)}%`);
  });
  let s = 680 - (performance.now() - o);
  s > 0 && (await new Promise((e) => setTimeout(e, s))),
    document.querySelector(`#boot`)?.classList.add(`hide`);
  let c = window;
  c.__HARBOR__ = r;
}
var Mr = new ae();
window.addEventListener(`error`, (e) => {
  Mr.track(`error`, { message: String(e.message || `error`) });
});
export function boot() {
  return jr().catch((e) => {
    console.error(e);
    let t = document.querySelector(`#boot p`);
    t && (t.textContent = e instanceof Error ? e.message : String(e));
  });
}
export { O, A, mt, ht, gt, _t, X, R, D, Le };
