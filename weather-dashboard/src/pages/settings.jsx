import { useLanguage } from "../context/LanguageContext";

export default function Settings() {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <div className="mt-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">
        {t.settings}
      </h2>

      <label className="block mb-2 font-medium">
        {t.language}
      </label>

      <select
        value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="p-2 rounded-lg border dark:bg-slate-700"
      >
        <option value="en">English</option>
        <option value="am">አማርኛ</option>
      </select>
    </div>
  );
}