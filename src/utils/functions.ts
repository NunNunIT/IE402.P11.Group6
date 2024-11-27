export function checkIncludeByAscii(str: string | null, searchStr: string | null): boolean {
  if (typeof str !== "string" || typeof searchStr !== "string") {
    return false;
  }

  return unicodeToAscii(str.trim().toLowerCase()).includes(
    unicodeToAscii(searchStr.trim().toLowerCase())
  );
}

export function unicodeToAscii(str?: string | null): string {
  if (typeof str !== "string")
    return "";

  // Define mappings of special characters to ASCII
  const a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";

  // Create a regular expression for special characters
  const p = new RegExp(a.split("").join("|"), "g");

  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[áàảạãăắằẳẵặâấầẩẫậ]/gi, "a")
    .replace(/[éèẻẽẹêếềểễệ]/gi, "e")
    .replace(/[iíìỉĩị]/gi, "i")
    .replace(/[óòỏõọôốồổỗộơớờởỡợ]/gi, "o")
    .replace(/[úùủũụưứừửữự]/gi, "u")
    .replace(/[ýỳỷỹỵ]/gi, "y")
    .replace(/đ/gi, "d")
    .replace(p, (c) => b.charAt(a.indexOf(c)));
}


export async function getRelativeLocation(
  location: TPosition,
  language: TLocale = DEFAULT_LOCALE
): Promise<any> {
  const LOCATION_API_URL: string =
    LOCATION_API_URL_UNFORMATTED.replace("{}", location.lat.toString()).replace(
      "{}",
      location.long.toString()
    ) +
    "&zoom=13" +
    `&accept-language=${language}`;

  // console.log(">> getRelativeLocation: LOCATION_API_URL:", LOCATION_API_URL);

  try {
    const payload = await fetch(LOCATION_API_URL).then((res) => res.json());

    return payload;
  } catch (error) {
    console.error(">> Error in getRelativeLocation", error.message);
    return null;
  }
}