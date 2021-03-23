import { promises as fs } from "fs";
import { homedir } from "os";
import path from "path";

const file = path.join(homedir(), ".score-board.json");
const initScores = [
  {
    name: "黄柄淇、高明泽、王锦程、孔森羽",
    score: 10,
    percent: 100,
  },
  {
    name: "孔荣欣、薛皓太、王一博、齐林、王浩翔、潘昱龙、王子康",
    score: 10,
    percent: 100,
  },
  { name: "邵熙杰、张宝聚、高小珺、王思彤", score: 10, percent: 100 },
];

const getScore = async () => {
  let fd;
  try {
    fd = await fs.open(file, "r");
    return JSON.parse(await fd.readFile({ encoding: "utf8" })).scores;
  } catch (err) {
    setScore({
      scores: initScores,
    });
    return initScores;
  } finally {
    await fd.close();
  }
};

const setScore = async (json) => {
  try {
    await fs.writeFile(file, JSON.stringify(json, null, 2), { flag: "w+" });
  } catch (err) {
    console.log(err);
  }
};

export { getScore as default, setScore };
