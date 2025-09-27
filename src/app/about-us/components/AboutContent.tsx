import Image from "next/image"

const AboutContent = () => {
  return (
    <main className="mb-48 md:mb-12 lg:mb-2">

      <div className="flex flex-col items-center gap-7 lg:gap-8 lg:flex-row">
        <div className="relative">
          <Image src="/images/bg-back.svg" alt="پس زمیه لوگو" width={146} height={147} className="lg:w-[354px] lg:h-[357px]" />
          <Image src="/images/Layer_1.svg" alt="لوگو" width={96} height={96} className="absolute top-[26px] right-[23px] lg:w-[254px] lg:h-[254px] lg:top-[51px] lg:right-[43px]" />
        </div>
        <div className="flex-1">
          <h2 className="text-center text-2xl lg:text-[44px] text-primary mb-2 lg:mb-8 font-extrabold">فروشگاه پدربزرگ</h2>
          <p className="w-auto text-justify text-sm lg:text-lg leading-[180%] font-extralight">&quot;پدربزرگ&quot; به عنوان یک استارتاپ فعال و پر انرژی در زمینه فروش محصولات ارگانیک شناخته می‌شود. ما از اصول پایداری به عنوان راهبرد اصلی خود الهام گرفته‌ایم و از طریق ارائه‌ی محصولات با کیفیت، به جلب توجه به سلامت و زندگی سبز مشتریان خود می‌پردازیم. &quot;پدربزرگ&quot; یک سفر فراتر از خرید و فروش است، بلکه یک تجربه ارگانیک است که در آن هر دانه یک داستان طعم و سلامت به خود دارد</p>
        </div>
      </div>

      <AboutFlower />

      <section>
        <AboutSingleContent
          alt="تنوع محصولات ارگانیک"
          title="تنوع محصولات ارگانیک"
          desc="&quot;پدربزرگ&quot; به عنوان نماینده برجسته در دنیای محصولات ارگانیک، تنوع بی‌پایانی از خوراکی‌ها تا محصولات بهداشتی را ارائه می‌دهد. اینجا هر دانه، یک داستان جذاب از زیبایی و سلامت است. از لذت گرفتن از هر ذره تا کشف طیف گسترده ای از خواص غذایی"
        />
        <AboutFlower />
        <AboutSingleContent
          alt="تنوع محصولات ارگانیک"
          title="تنوع محصولات ارگانیک"
          desc="&quot;پدربزرگ&quot; به عنوان نماینده برجسته در دنیای محصولات ارگانیک، تنوع بی‌پایانی از خوراکی‌ها تا محصولات بهداشتی را ارائه می‌دهد. اینجا هر دانه، یک داستان جذاب از زیبایی و سلامت است. از لذت گرفتن از هر ذره تا کشف طیف گسترده ای از خواص غذایی"
          dir={true}
        />
        <AboutFlower />
        <AboutSingleContent
          alt="تنوع محصولات ارگانیک"
          title="تنوع محصولات ارگانیک"
          desc="&quot;پدربزرگ&quot; به عنوان نماینده برجسته در دنیای محصولات ارگانیک، تنوع بی‌پایانی از خوراکی‌ها تا محصولات بهداشتی را ارائه می‌دهد. اینجا هر دانه، یک داستان جذاب از زیبایی و سلامت است. از لذت گرفتن از هر ذره تا کشف طیف گسترده ای از خواص غذایی"
        />
        <AboutFlower />
        <AboutSingleContent
          alt="تنوع محصولات ارگانیک"
          title="تنوع محصولات ارگانیک"
          desc="&quot;پدربزرگ&quot; به عنوان نماینده برجسته در دنیای محصولات ارگانیک، تنوع بی‌پایانی از خوراکی‌ها تا محصولات بهداشتی را ارائه می‌دهد. اینجا هر دانه، یک داستان جذاب از زیبایی و سلامت است. از لذت گرفتن از هر ذره تا کشف طیف گسترده ای از خواص غذایی"
          dir={true}
        />
      </section>
    </main>
  )
}

export default AboutContent

function AboutFlower() {
  return (
    <div className="my-8 grid place-content-center">
      <Image src="/icons/flower-about-content.svg" alt="گل" width={40} height={40} />
    </div>
  )
}

type IPropsSingleConent = {
  title: string;
  desc: string;
  alt: string;
  dir?: boolean;
}
function AboutSingleContent({ title, desc, alt, dir }: IPropsSingleConent) {
  return (
    <div className={`flex flex-col items-center gap-4 lg:gap-8 ${dir ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
      <img src="/images/Frame 1410.svg" alt={alt} className="w-[159px] h-[154px] lg:w-[367px] lg:h-[357px]" />
      <div>
        <h3 className="text-center text-primary mb-2 lg:mb-8 text-base lg:text-2xl font-black leading-[140%]">{title}</h3>
        <p className="text-justify leading-[180%] text-sm lg:text-lg p-about">{desc}</p>
      </div>
    </div>
  )
}