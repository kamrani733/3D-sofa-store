"use client";
import { useTheme, tokens } from "../store/scrollStore";

export default function Footer() {
  const theme = useTheme((s) => s.theme);
  const t = tokens[theme];

  return (
    <footer
      style={{
        background: t.bg,
        color: t.text,
        borderTop: `1px solid ${t.accent}`,
      }}
      className="py-12 px-[5vw]"
    >
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4" dir="rtl">
        <div className="flex flex-col gap-4">
          <a href="https://tolica.ir/" target="_blank" rel="noreferrer">
            <img
              src="https://tolica.ir/ztheme_front/img/logo-white.png"
              alt="Tolica"
              className="h-12"
            />
          </a>
          <p className="text-sm">تلفن : 05135412700</p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.instagram.com/tolica.ir/"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              اینستاگرام
            </a>
            <a
              href="https://telegram.me/tolica"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              تلگرام
            </a>
            <a
              href="https://facebook.com/tolicaco"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              فیسبوک
            </a>
            <a
              href="https://www.aparat.com/tolica"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              آپارات
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">خدمات مشتریان</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C"
                target="_blank"
                rel="noreferrer"
              >
                راهنمای خرید از تولـیکا
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%DA%AF%D8%A7%D8%B1%D8%A7%D9%86%D8%AA%DB%8C-%D9%88-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%BE%D8%B3-%D8%A7%D8%B2-%D9%81%D8%B1%D9%88%D8%B4"
                target="_blank"
                rel="noreferrer"
              >
                خـدمات پـس از فـروش
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%DA%86%DA%AF%D9%88%D9%86%D9%87-%D8%A8%D8%A7-%D8%AA%D9%88%D9%84%DB%8C%DA%A9%D8%A7-%DA%86%DB%8C%D8%AF%D9%85%D8%A7%D9%86-%DA%A9%D9%86%DB%8C%D9%85"
                target="_blank"
                rel="noreferrer"
              >
                چگونه با تولیکا چیدمان کنیم؟
              </a>
            </li>
            <li>
              <a href="https://tolica.ir/fa" target="_blank" rel="noreferrer">
                سـوالات مــتـداول
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86-%DA%86%DB%8C%D8%AF%D9%85%D8%A7%D9%86-%D9%85%D8%A8%D9%84%D9%85%D8%A7%D9%86"
                target="_blank"
                rel="noreferrer"
              >
                قوانین چیدمان مبلمان
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/shop/category/products/477_%DA%A9%D8%A7%D9%81%DB%8C-%D8%B4%D8%A7%D9%BE-%D8%AA%D9%88%D9%84%DB%8C%DA%A9%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                کافی شاپ تولیکا
              </a>
            </li>
            <li>
              <a href="https://tolica.ir/fa" target="_blank" rel="noreferrer">
                اپلیکیشن تولیکا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">تخفیفات و هدایا</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://tolica.ir/fa/agent/register"
                target="_blank"
                rel="noreferrer"
              >
                شرایط اخذ نمایندگی
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D8%AA%D9%88%D9%84%DB%8C%DA%A9%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                خـبرنامـه تولـیکا
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%A8%D9%88%D9%84%D8%AA%D9%86-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA"
                target="_blank"
                rel="noreferrer"
              >
                بولتن مـحصولات
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%DA%A9%D8%A7%D8%AA%D8%A7%D9%84%D9%88%DA%AF-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA-%D8%AA%D9%88%D9%84%DB%8C%DA%A9%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                کاتالوگ و بروشور
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D9%86%D9%85%D8%A7%DB%8C%D9%86%D8%AF%DA%AF%DB%8C-%D9%87%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                نمایندگی های فروش
              </a>
            </li>
            <li>
              <a
                href="https://monabat.tolica.ir/price-list"
                target="_blank"
                rel="noreferrer"
              >
                لـیست قیمت تولـیکا
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%A7%D8%AA%DB%8C%DA%A9%D8%AA-%D9%82%DB%8C%D9%85%D8%AA"
                target="_blank"
                rel="noreferrer"
              >
                دریافت اتیکت قیمت
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">شرکت ما</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%AA%D9%88%D9%84%DB%8C%DA%A9%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                دربـاره مــا
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLl-KpgIJd2a6kF39e2LphF5L6QoryQPm3eYtMFUCAkirM2w/viewform"
                target="_blank"
                rel="noreferrer"
              >
                فرم استخدام
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%AA%D9%85%D8%A7%D8%B3-%D8%A8%D8%A7-%D9%85%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                تماس با ما
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D8%B3%D8%AE%D9%86-%D8%B7%D8%B1%D8%A7%D8%AD%D8%A7%D9%86"
                target="_blank"
                rel="noreferrer"
              >
                ســخــن طــراحـان
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%DA%AF%D9%88%D8%A7%D9%87%DB%8C%D9%86%D8%A7%D9%85%D9%87-%D9%87%D8%A7-%D9%88-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-%D9%87%D8%A7"
                target="_blank"
                rel="noreferrer"
              >
                گواهینامه ها و استاندارد ها
              </a>
            </li>
            <li>
              <a
                href="https://tolica.ir/fa/page/%D9%86%DA%AF%D8%A7%D9%87%DB%8C-%D8%A8%D9%87-%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87"
                target="_blank"
                rel="noreferrer"
              >
                نگـاهـی به کـارخـانه
              </a>
            </li>
            <li>
              <a href="http://45.132.172.82/" target="_blank" rel="noreferrer">
                اتوماسیون
              </a>
            </li>
            <li>
              <a
                href="https://webmail.xoos.ir/"
                target="_blank"
                rel="noreferrer"
              >
                ایمیل مدیران تولیکا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
