"use client";

import { fontSize } from "@/utils/fontSize";
import { useTheme } from "next-themes";
import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import {
  mdiMoonWaningCrescent,
  mdiWhiteBalanceSunny,
  mdiFormatFontSizeIncrease,
  mdiFormatFontSizeDecrease,
  mdiWater,
  mdiVolumeHigh,
  mdiCursorDefault,
  mdiLoupe,
  mdiFormatLetterCase,
  mdiContrastCircle,
} from "@mdi/js";
import { IconsTools } from "./IconTools";
import { IconsImg } from "./IconsImg";

export function BarTools() {
  const { setHtmlFontSize } = useHtmlFontSize();
  const { setTheme, theme } = useTheme();

  return (
    <div className="bg-var-accessibility-header-bg min-h-[41px] flex justify-center md:justify-between px-6 gap-4 fixed w-full z-50 max-md:flex-wrap max-md:flex-col items-center py-2">
      <div className="flex items-center gap-5">
        <IconsTools theme={theme} onClick={() => setTheme("dark")} path={mdiMoonWaningCrescent} />
        <IconsTools theme={theme} onClick={() => setTheme("light")} path={mdiWhiteBalanceSunny} />
        <IconsTools theme={theme} onClick={() => setTheme("contrast")} path={mdiContrastCircle} />
        <IconsTools theme={theme} onClick={() => setTheme("monochrome")} path={mdiWater} />
        <IconsTools theme={theme} onClick={() => fontSize.increase(setHtmlFontSize)} path={mdiFormatFontSizeIncrease} />
        <div className="flex items-center gap-5 max-sm:hidden">
          <IconsTools theme={theme} onClick={() => fontSize.normalize(setHtmlFontSize)} path={mdiFormatLetterCase} />
        </div>
        <IconsTools theme={theme} onClick={() => fontSize.decrease(setHtmlFontSize)} path={mdiFormatFontSizeDecrease} />
        <IconsTools theme={theme} path={mdiVolumeHigh} />

        <div className="flex items-center gap-5 max-sm:hidden">
          <IconsTools theme={theme} path={mdiCursorDefault} />
          <IconsTools theme={theme} path={mdiLoupe} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <IconsImg
          href="https://www.facebook.com/memorialdemuriae/"
          target="_blank"
          src="/facebook.svg"
          srcDark="/facebook_white.svg"
          alt="Facebook Memorial de Muriaé"
        />
        <IconsImg
          href="https://www.youtube.com/@memorialdemuriae6233"
          target="_blank"
          src="/youtube.svg"
          srcDark="/youtube_white.svg"
          alt="Youtube Memorial de Muriaé"
        />
        <div className="text-base flex flex-nowrap gap-4">
          <p>|</p>
          <p className="text-nowrap text-var-accessibility-header-icon">BAIXE O APP</p>
        </div>

        <IconsImg
          href="https://play.google.com/store/apps/details?id=org.biomob.memorialmuriae"
          target="_blank"
          src="/google-play.svg"
          srcDark="/google-play_white.svg"
          alt="Baixar aplicativo Memorial de Muriaé no Google Play"
        />
      </div>
    </div>
  );
}
