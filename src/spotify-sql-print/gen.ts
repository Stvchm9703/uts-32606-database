// deno runner 

import { pgsql as sql, pgsqlQuote as sqlQuote, pgsqlOnlyTables as sqlOnlyTables } from 'https://deno.land/x/polysql/mod.ts';
// import { fetchArtistRelatedAlbums, tokenPrefetch } from "../spotify-api-fetch/fetch.ts";
import { parse as parseDate } from 'https://deno.land/std/datetime/mod.ts'
import type {
  Artist, Tag,
  Album, AlbumAvailableMarket, AlbumProduceByArtist,
  Track, TrackProduceByArtist, TracksAvailableMarket, TracksOnPlaylist,
  User,
} from "../spotify-prisma/prisma-client-js/index.d.ts";
// import { load as envLoad } from "https://deno.land/std/dotenv/mod.ts";
import { exists } from "https://deno.land/x/xeko_fs@0.1.5/mod.ts";
import { ensureFile } from 'https://deno.land/std/fs/mod.ts';
import { ensureDir } from 'https://deno.land/std@0.184.0/fs/ensure_dir.ts';
import rand from 'https://deno.land/x/random@v1.1.2/Random.js';
const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

const CreateDate = new Date();
/// fetch set
const preset_artist = [
  "2ye2Wgw4gimLv2eAKyk1NB", //Metallica
  "3qm84nBOXUEQ2vnTfUTTFC", //Guns N' Roses
  "7kZTWx6cRLc0TSRPq1XBMP", // DECO*27
  "3jdzcmtw5XOmOkSb2mRDtr", // "T.M.Revolution",
  "2ayMogRmamCnzMAk4YiFAz", // TM
  "1k5LyiTCRzPjORzcgHqJxF", // Kanaria.
  "56TyClNQ0oVZLhK2V9KhA6", //ZAQ,.
  "0MK8l3nURwwQIjafvXoJJt"
];
const artist_file = await Deno.readTextFile("./data/artist.json");
const artist_list = JSON.parse(artist_file);
const within_preset = artist_list.filter(
  (elm: any) => preset_artist.includes(elm.id)
);
const artist_list_2 = within_preset.map((artistData, index) => ({
  id: index + 1,
  createdAt: CreateDate,
  updatedAt: CreateDate,
  uid: artistData.id,
  name: artistData.name,
  imageUrl: artistData.images && artistData.images[0] ? (artistData.images[0].url || "") : "",
  popularity: artistData.popularity,
} as Artist))

const album_id_list = [
  "6UwjRSX9RQyNgJ3LwYhr9i",
  "70uejEPPRPSLBrTRdfghP5",
  "7h5xn0Olvx2p0eQcSt1Osy",
  "3dck2tBxGfxj9m3CguDgjb",
  "7Hc3m7konwS0ugyN8vJhNg",
  "4vxkHVyS6D66Rwt0mpz0cS",
  "2zhgGiT3sNBK2rbrC7JcRW",
  "5g3oqy7nAK03ke2cR5c95I",
  "3inFkZMAUrTnPFVSoLHb9O",
  "5tEW32iyrRuYPQQ4bwUiCf",
  "3KESkLVC8ivaWmZAoDinoc",
  "0CVEbITaSHVBJO2GnawOaj",
  "4bcUiX49wpmDRhrC8TvDWV",
  "1TKCBDHIWLiqjWTxomqniD",
  "7LwifLL1anaEd9eIIfIkx7",
  "4kizef5du9TgAGfNhWbKmt",
  "0ecPxTAKqXdr2MJYdYOM7e",
  "72grIwGP38Iy2S1jxt1Gjd",
  "3FgLMfp5o2h2rAny7S6h57",
  "3a1SJd8obHju43McHQew7J",
  "6PZnDE9gWetRTjw3pHbodW",
  "0kWBvUy985muQ5E0eCGAzH",
  "0lf5ceMub7KQhLfGxCdM06",
  "3bK58rVcWBh3V3vxMLzi0V",
  "4t0oscNTGJkXiIB2uqZYWg",
  "3A0FTyAAcjgfhPibPsuVSc",
  "4ljK2LVKvEPd5xPgUJn0Bs",
  "0HKpzK9ZoJ0oVA43E5gewM",
  "3kVRcb2fuCcKcqltzczxRP",
  "1OZaosC2RtsE2TEqLziwAD",
  "5b7HQ04lPT7eGJQ7fmVsjC",
  "0vshXZYhBkbIoqxyC2fXcF",
  "7KDqRmr937ylvGilPGWxfD",
  "0Ip2GlQPoAIgdkqCO2YkMa",
  "5rI3pfrpvmdYtGAsBwaGec",
  "6ndH0UlQbyCOVqByMXXhdV",
  "4iBN00FZaKlaXVYfxV7bBQ",
  "6TXWP5SAhTB9P0GN4tOT0B",
  "12nEtB2TU44qNHt6IsyIrZ",
  "2Kh43m04B1UkVcpcRa1Zug",
  "55fq75UfkYbGMq4CncCtOH",
  "4Cn4T0onWhfJZwWVzU5a2t",
  "2XbWaerVk9fjhEiGSrd6TF",
  "6jZ1z25PyF4Yd3kHxt9rl1",
  "6Eycw3dwcDMEFSqkUvLQ7g",
  "2bKDte0I4SceROjBMtYtKV",
  "5rFZcoCvmCaJ1gxTMU4JTm",
  "7CGhx630DIjdJqaBDVKc5j",
  "2Lq2qX3hYhiuPckC8Flj21",
  "5gzLOflH95LkKYE6XSXE9k",
  "1nnC02B9bhYh6IVFOoij0k",
  "33HYdYXXadqsdZ1NsYmS6o",
  "22BtZeG6Kq2VvQVlZCgCAG",
  "3R5UKfbGpobsD4KHNbYReV",
  "5S1uPYZSgeAkZYxvFuJBeW",
  "0suNLpB9xraAv1FcdlITjQ",
  "4ieR19hRkKeE81CalJPQNu",
  "00eiw4KOJZ7eC3NBEpmH4C",
  "0CxPbTRARqKUYighiEY9Sz",
  "6z5LStxyQzrUTrVxjiOXVU",
  "3edmYBHOTxfz8NxJE1QmTP",
  "28yHV3Gdg30AiB8h8em1eW",
  "2UWJ1UJybSEmQZ87lQHmp0",
  "0dMoESugZcGjrttbxxxqdV",
  "3DBIk4M0qaT0QR5DMIXnJq",
  "3eEUdIcGVpBEgQ086nCTmE",
  "6AK5hiec0u0guq19bKlSMm",
  "3Qf4H3NYSp3BMIRe6WOyOA",
  "3ZwjaVcnVo2TwhK8N8WWVs",
  "3nzKw4CYT0mAxI7xM41NyF",
  "29oQceWNG41pv9YmixxNqV",
  "1qCh03ExYb9hyi5itWndWG",
  "67n0mvI7AMZnQCH2vd85Z3",
  "6HRfL00lkjpQoGirvWhj4q",
  "2PrlXLsrOwpO8lZrmkWV05",
  "3riIMIzHM6SGRdkp1fXrF5",
  "5Rb6Q94DDEPWakydob5bPp",
  "5hlZaeq1TuTNMSdxJAglf1",
  "1GCPZH902hpTHqjXF7jQ0s",
  "0Mp8qsZhLGAX1XTL1PE0YP",
  "3qFF8RZSnHGf6q6jOcCXy5",
  "4Qb8IrRrj7VODAWuYglITl",
  "6TPhM7fNV68heKndka6F0Q",
  "5ddL2US7RDQWbKd7rb341z",
  "6Z62xiwdHnT8oR5gFclC2l",
  "1MqEDMHRTcStBWG9nJWcrf",
  "3euL5ADirJFFXvoX9OlIfA",
  "1XoKyOWzKCe40zGmSjNpqt",
  "2oSy4DbxYUqDp4sie8LvFw",
  "4iIqFpozjKLiWzHCtNsDY3",
  "4F8Fq5f3JSTsG5GnJ37Ctc",
  "3tQQuoz453P3lp3Kh7mbwI",
  "7ayQ4k28Um7JjMu9B5sxqJ",
  "2l59g3RwHXA3mkyIWP15Ze",
  "3wuCwqjCbU9SEVvB7QAh5n",
  "6Gp6rgebq9fGJtIOgDAiLe",
  "3sWLH9nyphF2oJqTTeE6GT",
  "2GpY4iShppsPlDxsTL2Apz",
  "0t8zeaayzdDn05KEqoqVzz",
  "7cjQMQzxrWDpa1htz8tLPw",
  "2MeXjWnEJE7sso6PkmfpDk",
  "2prhLJdoX7DM6qZtXJETnP",
  "1dJRJGlzFYjG1Xcy1m8NZJ",
  "7hICTO3prno0k5KUxn4hnf",
  "0VOhmU6KQzKN35ACYxGY3O",
  "7AqcRJCdLJIXxmwmfxGYdL",
  "35en6au7JxsZ9RnNUNy8qH",
  "4RqyeNSVWthESSg676MKLr",
  "11pU0vz7peTM1JdMZvSg9t",
  "0pdfn8iZCFwa2AakaapYxu",
  "2dPOTYm0jQ6elPeoCKJFE9",
  "4fNyl6PST775MMVeRu7Rcl",
  "6hN2meZRTAyOBCw7zTDIVw",
  "3mU2xxar81peOVlFgaelzk",
  "4yiqXnfWIbUUfVix9yqG8j",
  "0IqvfTqhzqxXedzXgq07Oq",
  "70emAkt3Ic6m8kh5LeF9Ct",
  "0EDbksre5oDW9DZeFTtzSq",
  "3C9IKRlOvxiSYprmGrlRVx",
  "6Nl1WWrnr1aC8Q7JT4RCsg",
  "0CON0Tap8uF9OygT4k126e",
  "2EstMJm0JwkH8A7Dk0fn5c",
  "6uZ24UOVZIPyJPru2aEyJU",
  "0ahF9rA2zSHLjGvCwdUq3T",
  "4rb03yCxIRdHFlNp5iqCJq",
  "3vqIpvErB8FwF1GS5Gizmt",
  "0nxI64K9QOpncJuwV3ukVs",
  "0MiDGnMa9qGebL1azdOLPT",
  "570eGpHgmUsMBQnnL4UZMB",
  "6Mlsw5buXQ6lFSZ0gs9Kil",
  "6hcTiYNOQIqtVcbhuUhwhT",
  "5smibeP51YNx9XDXJ1VRXp",
  "53iLroBfsEVenEfvjbIS41",
  "5mSBFvTbCy46lLzDW3xCxD",
  "69ly56BCOHEVC3Q3UAlJzf",
  "3htyNgHKm66ckDHgD10cvh",
  "6TSLuI1wZYcXkpQcymNWjW",
  "7qp2hWcNUJTRqWQ42WYPnX",
  "1kZXjOezJA0yFIz4lkFlMb",
  "2jI5qiLWmetKrWEd25nxBu",
  "0K9pdQRJMeqgq6f43b9ZYj",
  "2uHchUeKEjbxqM7nSqrOmH",
  "1Nz1JrJKCsAtTiIu5A3pw2",
  "4YSUF18ShAYt1ltHyWj3Y9",
  "1Rziwk4zzkq8kUD9xUBeIf",
  "3kQCkjT8ARwSHZ2JzNpXfM",
  "60N1WXQuCC2RPSkBU87NEN",
  "4bUq7OLIGyO5Uv9CdJiI2a",
  "60yAosEC0MutfNegNuvT5m",
  "6iS0eLciG1lvTWFZXgrK2n",
  "5xtB4tKFlwdMVFWhnlUWVE",
  "6U7xjKLuJudkVd9stwmRXY",
  "4hanaAd8pgQOmMDBZ9aOf6",
  "00bnHRXcrdmyDAQiNrzxZR",
  "5SXF6iVBKT8eQYE7wNsJxE",
  "2nGcW8903AOewh1sQj3NaH",
  "12z1kSgycDO48XkTt38t5l",
  "17jBonrZ7g65c6kGmQnC45",
  "34feh3CuEoAVXmBxgqVKzj",
  "7f8U5U2hEHM0cJVMCFVRjx",
  "0jrfhYJRuZIDTG069v6Keh",
  "2PC0pafvHcNe9j66iGfwQv",
  "1lIgdb6mQ5OlQAPp9ek4ld",
  "4KU5Cr0ISC4wSRWZMmZjSr",
  "0TbfRn6y0pt6U3PG5cT0uB",
  "0GakeQ4fCBonBY5faf3fMG",
  "15TjSlIr2UG05gDhBet0rC",
  "3e07BZ3Pi2wUVqO5sqr7bM",
  "0lsnp9bLMjdBrepmoNZMsW",
  "6ld8Bu5ybJ94XiskBsVmLs",
  "1X3C8BzLHQ9BGt3kk2eWuv",
  "12eBr9miXBkTkXgHjje5Ik",
  "4sDj5YDOVaJ6pgALgg06gN",
  "0cUQ4OVPwXVM4wDK1P8suV",
  "1ZpOaZfx5Me69iAycFWq0z",
  "5yqwxujcIwujAowGTVWtBR",
  "7loUaRbaF7vI6GTCxBn27d",
  "5CXMFIuduWKmLGf2e387GY",
  "1JNrmFpamiznUcq3bvmqqW",
  "7jL3cJpwG0dzH26R6pvm71",
  "1AWs9aoGdgmETVwzZcoyLF",
  "0z6d7zSYf9ZFkQA9kFsmEe",
  "4jpMiwfRwO5bs6BZkJouuI",
  "5Egx4Cohqf80LfIy5GpIk6",
  "025d3ip2r1hEWZwhTWBeTX",
  "3HNDKUnq04oYtbn80h5jVf",
  "3rcFIYys9QvhY11Av6NSJG",
  "6Dmdy0DkTOn8dpb6Pe6VG1",
  "6z0Q0I5nzCHgSPCqgidXz5",
  "7fu7doaiKSrQZLkLBgBnP4",
  "5MG59WBRNGgZrPgpvpRuNa",
  "6WrVy7FbTgn3gI2lNjq24i",
  "7uvzd3yKl2aeW0ptn1QEFT",
  "52CkWjKkGo4P6SN2T4XsNH",
  "2A33zCH0X2zswFVb03WCEe",
  "2xtdc4821D4INZrmL4vbnG",
  "5ZjejnAFBtILdgX5FPyJ8M",
  "37jT3k1gLWZwsvOnnjgZTJ",
  "34UE0ATLRzLTX2hytQnzu0",
  "6kB1JYjGI0CaLEyly33jh0",
  "05HlCEwQ6p8Z5NU0jM6ssq",
  "4FcHlyRbMx35HEwguFzICf",
  "0lCBqEGthc7fMpt4QHzRKq",
  "3K72h5S0tulBGr0yuMEA2x",
  "1Z024hSkjcF3P3FjRtAm3o",
  "5caSwBLTwvq0mk7cQwtf2O",
  "5si4gmIzHyLBKSSuUE9d2A",
  "1ATAuAlWm9YwYozPfCrLGn",
  "30eZWuPWgGXb0TYOJht0Qk",
  "5oqLJe9Djb24mLrMxYSPKZ",
  "1PwHrnwnlvNg8stBetjmyE",
  "5wJn8Yo0FqeSsvfUgrlXhx",
  "089xXTATtiHlkm0VCM0w8q",
  "2AmHDRUOPKyrmVNZY8hyNq",
  "4abbUX3gfMhHSN0gDrchyc",
  "4mLK5FpqwN0OwbDw3tToit",
  "32sf8CyAb7MtRbVTDJrWQA",
  "5bN9ddnWBszIifz4XhLlKj",
  "0LrlUcUd2weswbJiCx66LY",
  "3SKCsYo3OeMHUXmyuUWc81",
  "66ger6miaBdrS6j48rvNgf",
  "3sNmgNq8cxhRJOgDeTvE9g",
  "5tWbbW0Zau93tpMvQ5kELn",
  "0rp0Htb5EVN4G9boRMNPk4",
  "6NG4Ztq0KcNdsKYRu2RNOA",
  "2ssyzXqRbNiBA6jTL8F1nv",
  "3DBv02iEV7SRv9opSX8pZL",
  "55F9mwBpB9DRA9g52b8ZGJ",
  "66e4rjAEdmRLUoYaPDFJzz",
  "1SV1u0HaoIPvTGDVK98soQ",
  "623vd5so8U7NFy7tFWmTgV",
  "6n7rruycjHTAxslcfaGGLq",
  "72EUWbySKfHUVQOEZhJrfk",
  "1LMlPAArdBRYfYT9C8CTcV",
  "1xFcpdZWds4oZSICgjY1BI",
  "0CIxESdiukOKHzzHmuJZLv",
  "77ZS1tMyACG1hU0dzgdvYY",
  "1a2xSbvHc69UpRhx5MO2Nk",
  "3qCaV0KAHWhjGl20Fi3FfI",
  "3Uxp5RdaHTmHp3QlRVphjX",
  "7IRJ6a77nAR2jYEg5rDu1K",
  "5xHQMNCWpqgdP4uTvNZIYR",
  "5Hb56SRMcOCwZszYY3ZDmH",
  "44O5JsLDnFQcgSHeCqUoTk",
  "56Z5Vmm8y5SEOOE5TVnYf7",
  "1CJ00oauw7nst5qVaeRLW2",
  "7k4yqCo4GFM9775LBWwnwL",
  "0Bobg53JZaB99sYze18YiE",
  "21YDlUV6oZLDSRQ44TleCe",
  "1zuQw53RMuSsycrU5BDZPT",
  "6YYeJHOuub8G9lcQhaUrSh",
  "3TvJZmFZeVWz62LhoFpP5Q",
  "2BNINZ1zGWktzS7Vs6ecgx",
  "5cYI2y9skv60xPoB5XitpV",
  "1W4bJGdAt65DzubkFXVzYQ",
  "5yRWd2MTkidKAAcNOEjV1w",
  "607iGp1cXiYTbi30JTKISx",
  "5mQC73ewiQ7KV6uyz4yFnl",
  "2zE4YVJB26k11SSkopk0gT",
  "45eq9bwdGCqbzR3yxiUF5d",
  "7vVTetKgyLw9egnWubFdpt",
  "5Cs0BsDX62KwzJ0qMayTc2",
  "7psaAA3otT9yyuAalHqPhC",
  "6Z4Straysc3RjIMlYWVWUY",
  "0VMNQsXhIsQtcW8QOmIzHo",
  "0vptjQ8HaGWrQjCOIXTM2G",
  "3wmz5LudXtskEIT87Jn8S4",
  "1z1fiHGAKZmCXcZCRH1fma",
  "6RudsTqlExvcxI4dvdmPrt",
  "1bEgt4IWaGBGoWnfFwhdNC",
  "7g8PnKh5SAmW2RTfrp5ncc",
  "1PDe7UN7C5bKbpFQnDQr9d",
  "7w3E74TxKJDKzUXOcN9cxU",
  "6n9dzumIiKUunv4pYJiEK7",
  "2fgUFE1g0dJfGL007BoveA",
  "1Pz6ADZaTvqTSUBC2ux7oI",
  "3ovX8G9Sop8sZCuAcj0lS9",
  "6ZcU0MGlWn9oc4dEhY1TEI",
  "5oA5jyMLX7pLpYGUwhmjL5",
  "4ys4lrEwbsYH5gBjU1WEsC",
  "56xQzwz8VKC3LOtvrI4g04",
  "3j2n8ZYCGF2vBG0FlNLySB",
  "6SmyaO1lx0PJpXb47XLRdv",
  "6dT6HAU5koeNRTQBKywvbA",
  "6BGCOeart36zrZsEN9vOs7",
  "7esEraxgPxV0BlLBjaP8Gs",
  "0Uyi2JOBe0wmMPZbF16P2L",
  "4cNLizWuaRvTTC6Mt1DbBe",
  "6R09eDJbkRXFuZK1MFHRwp",
  "2rb7VoFHOluiQsRfSFwkii",
  "6P79aaidDhSJ02RrtmfEX5",
  "1HHW09vRLlKzHfiplZJrTb",
  "7F9ytEr5V8SSCLzuL2Yg8d",
  "1tO1dNqOUUzaC7OqzXna2H",
  "14DwyfluApriQvXAlRoPCq",
  "68lVf8zDzoa58W8LTmH9ns",
  "1qtfL1UFSPny85V6GLyH8T",
  "65Fx2KLDsAUCQ8Yq009qwD",
  "0VSfvFLjBWkADFqpAvDThg",
  "7M9pXhlrrkB5rQHf5nOf8Q",
  "2eULryR86IygZwK1FSE3VG",
  "4u01G81U2vkZiP7Bs26fUR",
  "1gKqUQmdBseRyy3mK62imZ",
  "0n18GOtwjBjY3KVH47FW6H",
  "59v7SL2FLx1NL21WxV4Kir",
  "0lQ51jHzEixkCMhyguJt6J",
  "2si9SsOjJplp5DMpeHuOyn",
  "3cDMO2KPDGbLSeS1KmqAfJ",
  "72CGvWVW0C1HDQEJFSUAho",
  "59ccuCQ4mlPXvVcyN1kKDi",
  "4iTYIpp6gCVu7YRK54c1PE",
  "2suyYa1rf3oOPIxkIheJcW",
  "6DcqDTMFUmlCVIb85eKQ4S",
  "0AcMZwrAXaYAJdz2ejRXqO",
  "3LQOaeoN5OKASu23YQUJAu"
]

const album_list = [];
const track_list = [];
for (const album_set_id of album_id_list) {
  const isExist = await exists(`./data/album-${album_set_id}.json`);
  if (isExist) {
    const album_raw = await Deno.readTextFile(`./data/album-${album_set_id}.json`);
    album_list.push(JSON.parse(album_raw))
  }
  const isExist2 = await exists(`./data/track-${album_set_id}.json`);
  if (isExist2) {
    const track_raw = await Deno.readTextFile(`./data/track-${album_set_id}.json`);
    track_list.push(...(JSON.parse(track_raw)))
  }
}

const album_insert_row = album_list.map((albumData, index) => ({
  id: index + 1,
  createdAt: CreateDate,
  updatedAt: CreateDate,
  uid: albumData.id,
  name: albumData.name,
  imageUrl: albumData.images && albumData.images[0] ? (albumData.images[0].url || "") : "",
  albumType: albumData.album_type,
  // albumGroup: albumData.album_group,
  totalTracks: albumData.total_tracks,
  releaseDate: albumData.release_date && albumData.release_date !== "" && /([\d]{4})\-([\d]{2})\-([\d]{2})/gm.test(albumData.release_date)
    ? albumData.release_date
    : albumData.release_date + '-01-01',
  releaseDatePrecision: albumData.release_date_precision,
  copyrights: albumData.copyrights.map(ite => ite.text).join(';')
} as Album))


const track_insert_row = track_list.map((track_sett, index) => ({
  id: index + 1,
  createdAt: CreateDate,
  updatedAt: CreateDate,
  uid: track_sett.id,
  name: track_sett.name,
  discNumber: track_sett.disc_number,
  durationMs: track_sett.duration_ms,
  // explicit: track_sett.explicit,
  popularity: track_sett.popularity,
  previewUrl: track_sett.preview_url,
  trackNumber: track_sett.track_number,
  // isLocal: track_sett.is_local,
  albumId: (album_insert_row.find(elm => elm.uid === track_sett.album_uid) || {}).id || -1
} as Track))


const genre_list = [...(new Set(
  [
    ...within_preset.flatMap(elm => elm.genres),
    ...album_list.flatMap(elm => elm.genres),
    ...track_list.flatMap(elm => elm.genres),
  ]
))].filter(e => e);
const market_str_list: Array<string> = ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"]



// tag-list 
const tag_list = [
  ...market_str_list.map(elm => ({
    name: elm,
    code: (elm),
    type: "market"
  })),
  ...genre_list.map(elm => ({
    name: elm,
    code: toSnakeCase(elm),
    type: "genre"
  }))
].map((elm, id) => ({ ...elm, id: id + 1 }));

const user_set = {
  "country": "HK",
  "display_name": "steven",
  "email": "stv.chm@gmail.com",
  "explicit_content": {
    "filter_enabled": false,
    "filter_locked": false
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/user/wszqelp33nf1bz2wobzquabc7"
  },
  "followers": {
    "href": null,
    "total": 0
  },
  "href": "https://api.spotify.com/v1/users/wszqelp33nf1bz2wobzquabc7",
  "id": "wszqelp33nf1bz2wobzquabc7",
  "images": [],
  "product": "free",
  "type": "user",
  "uri": "spotify:user:wszqelp33nf1bz2wobzquabc7"
}


const user_row_set = {
  createdAt: CreateDate,
  updatedAt: CreateDate,
  uid: "wszqelp33nf1bz2wobzquabc7",
  name: "steven",
  email: "stv.chm@gmail.com",
  authType: "",
  type: "user",
  country: "HK",
  explicitContentFilterEnabled: false,
  explicitContentFilterLocked: false,
  imagesId: "",
  product: "free",
  followingBaseId: null
}



const tag_insert_script = (tag_arr: Array<any>) => sql`
INSERT INTO "Tag" <${tag_arr}>
ON CONFLICT (code) DO NOTHING; 
`
const artist_insert_script = (artist_arr: Array<any>) => {
  // return sql`
  // INSERT INTO "Artist_fj" <${artist_arr}>
  // ON CONFLICT (uid) DO NOTHING; 
  // `

  return sql`
INSERT INTO "Artist" <${artist_arr.map(elm => ({
    id: elm.id,
    name: elm.name,
    popularity: elm.popularity,
    imageUrl: elm.imageUrl,
  }))}>
;

INSERT INTO "ArtistMeta" <${artist_arr.map(elm => ({
    id: elm.id,
    createdAt: elm.createdAt,
    updatedAt: elm.updatedAt,
    uid: elm.uid,
  }))}>
;
  `
}

const album_insert_script = (album_arr: Array<any>) => {
  //   return sql`
  // INSERT INTO "Album" <${album_arr}>
  // ON CONFLICT (uid) DO NOTHING; 
  // `
  return sql`
INSERT INTO "Album" <${album_arr.map(elm => ({
    id: elm.id,
    albumType: elm.albumType,
    totalTracks: elm.totalTracks,
    name: elm.name,
    imageUrl: elm.imageUrl,
  }))}>
;

INSERT INTO "AlbumMeta" <${album_arr.map(elm => ({
    id: elm.id,
    createdAt: elm.createdAt,
    updatedAt: elm.updatedAt,
    uid: elm.uid,
    releaseDate: elm.releaseDate,
    releaseDatePrecision: elm.releaseDatePrecision,
    copyrights: elm.copyrights,
  }))}>
;


`
}
const track_insert_script = (track_row: Array<any>) => {
  //   return sql`
  // INSERT INTO "Track_fj" <${track_row}>
  // ON CONFLICT (uid) DO NOTHING; 
  // `;

  return sql`
INSERT INTO "Track" <${track_row.map(elm => ({
    id: elm.id,
    name: elm.name,
    discNumber: elm.discNumber,
    popularity: elm.popularity,
    trackNumber: elm.trackNumber,
    albumId: elm.albumId,
  }))}>
;

INSERT INTO "TrackMeta" <${track_row.map(elm => ({
    id: elm.id,
    createdAt: elm.createdAt,
    updatedAt: elm.updatedAt,
    uid: elm.uid,
    previewUrl: elm.previewUrl,
    durationMs: elm.durationMs
  }))}>
;
`
}

const track_produce_by_artist_insert_script = (track_raw_list: Array<any>) => {
  const id_pair = track_raw_list.flatMap(elm => {
    return elm.artists.map(kelm => ({
      trackId: track_insert_row.find(relm => relm.uid === elm.id).id || 0,
      artistId: (artist_list_2.find(relm => relm.uid === kelm.id) || {}).id || -1
    }))
  }).filter(elm => elm.artistId !== -1)
  return sql`
INSERT INTO "TrackProduceByArtist" <${id_pair}>
ON CONFLICT ("trackId" , "artistId")
DO NOTHING; 
`}


const tracks_available_market_insert_script = (track_raw_list: Array<any>) => {
  const id_pair = track_raw_list.flatMap(elm => {
    return elm.available_markets.map(kelm => ({
      trackId: track_insert_row.find(relm => relm.uid === elm.id).id || 0,
      tagId: (tag_list.find(relm => relm.code === kelm)).id || 0,
    }))
  })
  return sql`
INSERT INTO "TracksAvailableMarket" <${id_pair}>
ON CONFLICT ("trackId" , "tagId")
DO NOTHING; 
`}
const album_produce_by_artist_insert_script = (album_raw_list: Array<any>) => {
  const id_pair = album_raw_list.flatMap(elm => {
    return elm.artists.map(kelm => ({
      albumId: album_insert_row.find(relm => relm.uid === elm.id).id || 0,
      artistId: (artist_list_2.find(relm => relm.uid === kelm.id) || {}).id || -1
    }))
  }).filter(elm => elm.artistId !== -1)
  return sql`
INSERT INTO "AlbumProduceByArtist" <${id_pair}>
ON CONFLICT ("albumId" , "artistId")
DO NOTHING; 
`}
const album_available_market_insert_script = (aretist_raw_list: Array<any>) => {
  const id_pair = aretist_raw_list.flatMap(elm => {
    return elm.available_markets.map(kelm => ({
      albumId: album_insert_row.find(relm => relm.uid === elm.id).id || 0,
      tagId: (tag_list.find(relm => relm.code === kelm)).id || 0,
    }))
  })
  return sql`
INSERT INTO "AlbumAvailableMarket" <${id_pair}>
ON CONFLICT ("albumId" , "tagId")
DO NOTHING; 
`}

const artist_in_genres_insert_script = () => {
  // console.log(within_preset);
  const id_pair = within_preset.flatMap(elm => {
    return elm.genres.map(kelm => ({
      artistId: artist_list_2.find(relm => relm.uid === elm.id).id || 0,
      tagId: (tag_list.find(relm => relm.name === kelm)).id || 0,
    }))
  });
  return sql`
INSERT INTO "ArtistInGenres" <${id_pair}>
ON CONFLICT ("artistId" , "tagId")
DO NOTHING; 
`}

const playlist_insert_script = () => {
  const randr = new rand();
  const playlist_set = [
    {
      id: 1,
      name: 'j-anime mix',
      "description": "random j-anime",
      "public": true,
      "primaryColor": "red",
      "imagesId": "",
      createdAt: CreateDate,
      updatedAt: CreateDate,
    },
    {
      id: 2,
      name: 'hard-rock mix',
      "description": "random hard rock",
      "public": true,
      "primaryColor": "red",
      "imagesId": "",
      createdAt: CreateDate,
      updatedAt: CreateDate,
    }
  ];
  const list_set = Array(3072 - 2477).fill(0).map(e => randr.int(2477, 3072));
  console.log(list_set)
  const new_lsit = [...(new Set(list_set))].map(elm => ({
    trackId: elm,
    playlistId: 1
  }));
  const list_set1 = Array(1650 - 1).fill(0).map(e => randr.int(1, 1650))
  const new_lsit1 = [...(new Set(list_set1))].map(elm => ({
    trackId: elm,
    playlistId: 2
  }));
  return sql`
INSERT INTO "Playlist" <${playlist_set.map(elm => ({
    id: elm.id,
    name: elm.name,
    "description": elm.description,
    "public": elm.public,
    "primaryColor": elm.primaryColor,
    "imagesId": elm.imagesId,
  }))}>
;

INSERT INTO "PlaylistMeta" <${playlist_set.map((elm, index) => ({
    id: elm.id,
    createdAt: elm.createdAt,
    updatedAt: elm.updatedAt,
    uid: index + 1,
  }))}>;


  INSERT INTO "TracksOnPlaylist" 
  <${new_lsit}>;
  INSERT INTO "TracksOnPlaylist"
  <${new_lsit1}>;
`
}

// console.log(
//   artist_insert_script(within_preset) + '\n\n',
//   tag_insert_script(tag_list) + '\n\n',
//   album_insert_script(album_insert_row) + '\n\n',
//   track_insert_script(track_insert_row) + '\n\n',
//   tracks_available_market_insert_script(track_list) + '\n\n',
// )

await ensureDir("./output");
await ensureFile('./output/quick-input.sql');

await Deno.writeTextFile('./output/quick-input.sql', [
  '-- generate in build script --',
  `-- created time : ${sqlQuote(CreateDate)} --`,
  '-- artist data --',
  `-- total record : ${artist_list_2.length} --`,
  artist_insert_script(artist_list_2) + '\n',
  '-- tag data --',
  `-- total record : ${tag_list.length} --`,
  tag_insert_script(tag_list) + '\n',
  '-- album data --',
  `-- total record : ${album_insert_row.length} --`,
  album_insert_script(album_insert_row) + '\n',
  '-- track data -- \n',
  `-- total record : ${track_insert_row.length} --`,
  track_insert_script(track_insert_row) + '\n',

  '-- M2M table data --',
  // `-- total record : ${track_list.length} --`,
  '-- artist to tag --',
  artist_in_genres_insert_script(),
  '-- track to tag data --',

  tracks_available_market_insert_script(track_list) + '\n',
  '-- track to artist --',
  track_produce_by_artist_insert_script(track_list) + '\n',
  '-- album to tag --',
  album_available_market_insert_script(album_list) + '\n',
  '-- album to artist --',
  album_produce_by_artist_insert_script(album_list) + '\n',
  '-- playlist --',
  playlist_insert_script(),
].join('\n'))
