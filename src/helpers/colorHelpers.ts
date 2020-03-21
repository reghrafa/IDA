export class Color {
  static fromHSV(color: IColorHSV): Color {
    return this.fromRGB(HSVToColor(color));
  }
  static fromRGB(color: IColor): Color {
    return new Color(color.r, color.g, color.b);
  }
  static fromRGBA(color: IColorRGBA): Color {
    return new Color(color.r, color.g, color.b, color.a);
  }
  static fromHEX(color: string): Color {
    return this.fromRGB(HEXToColor(color));
  }
  static lighten(color: Color, amount: number): Color {
    const { h, s, v } = color.HSV;
    const change = amount / 100;
    const newV = v + change < 1.0 ? (v + change > 0.0 ? v + change : 0.0) : 1.0;
    return this.fromHSV({ h, s, v: newV });
  }
  private _r: number;
  private _g: number;
  private _b: number;
  private _a: number;
  constructor(r: number, g: number, b: number, a?: number) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a || 1;
  }
  set r(r: number) {
    if (r >= 0 && r <= 1) this._r = r;
  }
  set g(g: number) {
    if (g >= 0 && g <= 1) this._g = g;
  }
  set b(b: number) {
    if (b >= 0 && b <= 1) this._b = b;
  }
  set a(a: number) {
    if (a >= 0 && a <= 1) this._a = a;
  }

  get r(): number {
    return this.r;
  }
  get g(): number {
    return this.g;
  }
  get b(): number {
    return this.b;
  }
  get a(): number {
    return this.a;
  }
  get RGB(): IColor {
    return {
      r: this._r,
      g: this._g,
      b: this._b
    };
  }
  get RGBA(): IColorRGBA {
    return {
      r: this._r,
      g: this._g,
      b: this._b,
      a: this._a
    };
  }
  get HSV(): IColorHSV {
    return ColorToHSV(this.RGB);
  }
  get HEX(): string {
    return ColorToHEX(this.RGB);
  }
}

export interface IColor {
  r: number;
  g: number;
  b: number;
}

export interface IColorRGBA extends IColor {
  a: number;
}
export interface IColorHSV {
  h: number;
  s: number;
  v: number;
}
const HEXToColor = (hex: string): IColor => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 };
};
const ColorToHEX = (color: IColor): string => {
  return (
    "#" +
    ((1 << 24) + (color.r << 16) + (color.g << 8) + color.b)
      .toString(16)
      .slice(1)
  );
};
const ColorToHSV = (color: IColor): IColorHSV => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  const minRGB = Math.min(r, Math.min(g, b));
  const maxRGB = Math.max(r, Math.max(g, b));
  // Grayscale
  if (minRGB == maxRGB) return { h: 0, s: 0, v: minRGB };
  // Color
  const d = r == minRGB ? g - b : b == minRGB ? r - g : b - r;
  const h = r == minRGB ? 3 : b == minRGB ? 1 : 5;
  return {
    h: 60 * (h - d / (maxRGB - minRGB)),
    s: (maxRGB - minRGB) / maxRGB,
    v: maxRGB
  };
};
const HSVToColor = (hsv: IColorHSV): IColor => {
  const h = hsv.h / 360;
  const s = hsv.s;
  const v = hsv.v;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r = 0,
    g = 0,
    b = 0;
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
const HEXToHSV = (hex: string): IColorHSV => ColorToHSV(HEXToColor(hex));
const HSVToHEX = (hsv: IColorHSV): string => ColorToHEX(HSVToColor(hsv));

const ColorToString = (rgb?: IColor, a?: number, rgba?: IColorRGBA) => {
  if (rgba) return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  if (rgb) return `rgba(${rgb.r},${rgb.g},${rgb.b},${a || 1})`;
  return "rgba(0, 0, 0, 0)";
};
