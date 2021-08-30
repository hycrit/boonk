require("dotenv/config");

module.exports = {
  token: process.env.TOKEN,
  embedColor: "#32a852",
  prefix: "!",
};

module.exports.streamConfig = {
  ytdlOptions: {
    filter: "audio",
    highWaterMark: 1 << 15,
    volume: false,
    requestOptions: {
      maxRedirects: 4
    }
  },
  options: {
    seek: null,
    bitrate: 1024,
    volume: 1,
    type: "converted",
  },
}

module.exports.emojis = {
  garbage: "🗑️ ",
  green_check_mark: ":white_check_mark: ",
  loading: ":arrows_counterclockwise: ",
  loudSound: ":loud_sound: ",
  megaPhone: "📣 ",
  notes: ":notes: ",
  pause: ":pause_button: ",
  previous: ":previous_track: ",
  redx: ":x: ",
  repeat: ":repeat: ",
  repeatSong: ":repeat_one: ",
  resume: ":arrow_forward: ",
  shuffle: ":twisted_rigthwards_arrows: ",
  signal: ":signal_strength: ",
  skip: ":next_track: ",
  speaker: ":speaker: ",
  stop: ":stop_button: ",
  stopWatch: ":stopwatch: ",
  volumeHigh: ":loud_sound: ",
}