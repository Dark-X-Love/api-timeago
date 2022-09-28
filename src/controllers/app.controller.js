import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import "dayjs/locale/es-pr.js";

export const getTime = (req, res) => {
  try {
    dayjs.extend(LocalizedFormat);
    const day = dayjs().locale("es-pr").format("LL LTS");
    return res.json({ dia: day, change: false });
  } catch (error) {
    return res.json({ err: error.message });
  }
};
