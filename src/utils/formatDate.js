import { format, formatDistanceToNow } from "date-fns";
import { zhCN, enUS } from "date-fns/locale";

/**
 * 格式化日期为人类可读形式
 * @param {string|Date} inputDate - 原始日期
 * @param {string} lang - "zh" | "en"
 * @param {object} options
 * @param {boolean} options.relative - 是否使用相对时间（如“3天前”）
 * @returns {string}
 */
export function formatDate(inputDate, lang = "zh", options = {}) {
  try {
    const date = new Date(inputDate);
    if (isNaN(date)) return "";

    const locale = lang === "zh" ? zhCN : enUS;

    if (options.relative) {
      return formatDistanceToNow(date, { locale, addSuffix: true });
    }

    const pattern = lang === "zh" ? "yyyy年M月d日" : "MMM d, yyyy";
    return format(date, pattern, { locale });
  } catch (err) {
    console.warn("日期格式错误:", inputDate);
    return "";
  }
}
