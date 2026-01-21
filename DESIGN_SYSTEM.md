# Design System: Read Me Right!

## Concepto de diseño

**Memphis Design / 80s Pop Art × Brutalismo Digital**

Un sistema de diseño provocativo que combina la estética caótica y colorida del Memphis Design con elementos brutalistas digitales. El resultado es una experiencia visual agresiva, honesta y sin filtros que refleja la personalidad irreverente de la app.

**Principios de diseño:**
- **Brutalidad honesta**: Sin suavizados, sin gradientes, sin mentiras
- **Asimetría intencional**: Nada está perfectamente alineado (y así está bien)
- **Color como impacto**: Paleta vibrante sin matices intermedios
- **Tipografía como voz**: Bold, directa, sin disculpas
- **Movimiento con propósito**: Animaciones que comunican caos controlado

---

## Paleta de colores

### Colores principales

| Color | Hex | Uso | CSS Variable |
|-------|-----|-----|--------------|
| 🟦 **Turquesa Retro** | `#14CEC7` | Fondos, acentos, botones | `--turquesa-retro` |
| 🟥 **Rosa Shocking** | `#FF006E` | CTAs principales, acentos de alto impacto | `--rosa-shocking` |
| 🟨 **Amarillo Sol** | `#FFD60A` | Highlights, badges, elementos interactivos | `--amarillo-sol` |
| 🟪 **Violeta Profundo** | `#9D4EDD` | Botones secundarios, overlays | `--violeta-profundo` |
| ⬛ **Negro Tinta** | `#000814` | Texto, bordes, sombras | `--negro-tinta` |
| 🟧 **Beige Papel** | `#FDF0D5` | Fondos neutros, texto en fondos oscuros | `--beige-papel` |

### Uso de color por pantalla

- **Welcome Screen**: Fondo Beige Papel, acentos en todos los colores vibrantes
- **Question Screens**: Fondos rotativos (Amarillo Sol → Rosa Shocking → Turquesa Retro → Violeta Profundo → Amarillo Sol)
- **Loading Screen**: Fondo Turquesa Retro
- **Results Screen**: Fondo Beige Papel
- **Transiciones**: Fondo Negro Tinta entre pantallas

### Accesibilidad

- Contraste mínimo 4.5:1 en todos los textos
- Negro Tinta (#000814) sobre Amarillo Sol: ✅ 11.2:1
- Beige Papel (#FDF0D5) sobre Rosa Shocking: ✅ 5.8:1
- Negro Tinta sobre Turquesa Retro: ✅ 7.1:1

---

## Tipografía

### Fuentes

**Display (Títulos, botones, elementos destacados):**
```css
font-family: 'Rubik', system-ui, -apple-system, sans-serif;
```
- Weights usados: 700, 800, 900
- Características: Geométrica, bold, con personalidad

**Body (Textos, descripciones):**
```css
font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
```
- Weights usados: 400, 500, 600, 700
- Características: Legible, moderna, versátil

### Jerarquía tipográfica

| Elemento | Font | Size | Weight | Letter-spacing | Transform |
|----------|------|------|--------|----------------|-----------|
| **Hero Title** | Rubik | 4.5rem (72px) | 900 | 0.02em | uppercase |
| **Section Title** | Rubik | 2rem (32px) | 800 | -0.01em | - |
| **Question Text** | Rubik | 2rem (32px) | 800 | -0.01em | - |
| **Book Title** | Rubik | 1.75rem (28px) | 800 | 0em | - |
| **Button Text** | Rubik | 1.125-1.25rem | 700-800 | 0em | uppercase |
| **Badge/Tag** | Rubik | 0.75rem (12px) | 700 | 0.05-0.08em | uppercase |
| **Body Text** | Work Sans | 1rem (16px) | 500-600 | 0em | - |
| **Microcopy** | Work Sans | 0.875rem (14px) | 600 | 0.01em | - |

### Reglas de uso

- **MAYÚSCULAS**: Solo en badges, tags y CTAs principales
- **Letter-spacing**: Más amplio en elementos uppercase (0.05-0.08em)
- **Line-height**: Tight en títulos (1.05-1.2), comfortable en body (1.4-1.6)

---

## Espaciado y grid

### Sistema de espaciado

Basado en Tailwind CSS con escala de 4px:

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 2.5rem (40px)
```

### Padding interno

- **Cards**: `p-6` (24px)
- **Buttons**: `py-5 px-6` (20px vertical, 24px horizontal)
- **Badges**: `px-4 py-2` (16px horizontal, 8px vertical)
- **Containers**: `p-6` mobile, `px-8` para desktop

### Márgenes y gaps

- **Spacing entre secciones**: `space-y-8` a `space-y-10` (32-40px)
- **Gap entre elementos**: `gap-3` a `gap-5` (12-20px)
- **Margin top/bottom de pantallas**: `py-16` (64px)

---

## Componentes

### Buttons

**Primary Button (CTA principal):**
```css
background: var(--rosa-shocking);
color: #000814;
border: 5px solid var(--negro-tinta);
padding: 20px 24px;
font-size: 1.25rem;
font-weight: 800;
box-shadow: 6px 6px 0px #000814;
transform: rotate(-1deg);
```

**States:**
- Hover: `scale(1.02)`, `x: 3px`, `y: 3px`, overlay violeta
- Active: `scale(0.98)`, `x: 6px`, `y: 6px`
- Focus: `outline: 4px solid var(--amarillo-sol)`

**Answer Buttons:**
```css
background: Rotativo (turquesa, violeta, rosa, amarillo)
border: 5px solid var(--negro-tinta);
padding: 20px 24px;
text-transform: uppercase;
box-shadow: 6px 6px 0px #000814;
transform: rotate(-0.5deg | 0.5deg) alternado
```

### Cards (Book Cards)

```css
background: Rotativo (turquesa, rosa, amarillo)
border: 5px solid var(--negro-tinta);
padding: 24px;
transform: rotate(-1deg | 1deg) alternado
```

**Estructura:**
- Cover image: `w-32 h-48`, border 4px, rotación 2deg
- Justification box: border 3px, background rgba(0,0,0,0.08-0.15), rotación -0.5deg
- CTA Button integrado

### Badges & Tags

```css
background: Cualquier color de la paleta
color: var(--negro-tinta) o var(--beige-papel) según contraste
border: 3px solid var(--negro-tinta);
padding: 8px 16px;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.05-0.08em;
text-transform: uppercase;
border-radius: 30px (optional)
```

**Animaciones:**
- Rotación continua suave: `rotate([-3, 3, -3])` con `duration: 2s`

### Progress Bar

**Barra de preguntas:**
```css
Container:
  height: 16px;
  border: 3px solid var(--negro-tinta);
  background: transparent;
  border-radius: full;

Fill:
  background: var(--negro-tinta);
  transition: width 0.5s ease-out;
```

**Barra de loading (Brutalista):**
```css
Container:
  height: 32px;
  border: 5px solid var(--negro-tinta);
  background: var(--beige-papel);
  box-shadow: 6px 6px 0px var(--negro-tinta);

Fill:
  background: var(--negro-tinta);
  
Indicator:
  width: 16px;
  height: 16px;
  background: var(--amarillo-sol);
  border: 2px solid var(--negro-tinta);
  animation: scale pulse 0.5s infinite;
```

### Loading Elements

**Cuadrados rebotando (sin bordes):**
```css
width: 32px;
height: 32px;
background: var(--violeta-profundo) | var(--rosa-shocking) | var(--amarillo-sol);
animation: y: [0, -20, 0] staggered delay
```

### Message Boxes

```css
background: var(--beige-papel);
border: 6px solid var(--negro-tinta);
box-shadow: 8px 8px 0px var(--negro-tinta);
padding: 24px 32px;
font-size: 2rem;
font-weight: 900;
```

---

## Borders & Shadows

### Border Thickness

- **Elementos principales**: `5px solid`
- **Elementos secundarios**: `3px solid`
- **Elementos de detalle**: `2px solid`
- **Separadores visuales**: `6px solid` (loading messages)

### Box Shadows (Brutalista)

**Sombra principal:**
```css
box-shadow: 6px 6px 0px var(--negro-tinta);
```

**Sombra enfatizada:**
```css
box-shadow: 8px 8px 0px var(--negro-tinta);
```

**Regla**: Las sombras SIEMPRE son sólidas, sin blur, sin opacity. Negro puro.

---

## Transformaciones & Rotaciones

### Rotaciones de elementos

- **Título principal**: Líneas alternadas (-2deg, 2deg, -1deg)
- **Botones**: -1deg a 1deg
- **Cards**: Alternado -1deg / 1deg según índice
- **Badges**: -2deg a 5deg
- **Elementos internos**: -0.5deg a 2deg

### Regla de asimetría

**Ningún elemento debe estar perfectamente horizontal.** Rotaciones sutiles crean dinamismo visual sin comprometer legibilidad.

---

## Animaciones

### Motion (Framer Motion)

**Entrada de pantalla:**
```javascript
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.95 }}
transition={{ duration: 0.15-0.4, ease: "easeInOut" }}
```

**Bounce animado (CTA principal):**
```javascript
animate={{ 
  y: [0, -8, 0],
  rotate: [-1, 1, -1]
}}
transition={{ 
  repeat: Infinity,
  duration: 2,
  ease: "easeInOut"
}}
```

**Hover states (Botones):**
```javascript
whileHover={{ 
  scale: 1.02,
  x: 3,
  y: 3,
  rotate: -1
}}
whileTap={{ 
  scale: 0.98,
  x: 6,
  y: 6
}}
```

**Rotación continua (Badges):**
```javascript
animate={{ rotate: [-3, 3, -3] }}
transition={{ duration: 2, repeat: Infinity }}
```

**Staggered children:**
```javascript
transition={{ delay: index * 0.1-0.2 }}
```

### Timing

- **Transiciones rápidas**: 0.15-0.25s (cambios de pantalla)
- **Interacciones**: 0.3s (hover effects)
- **Animaciones ambientales**: 1.8-2.5s (rotaciones continuas)
- **Loading**: 3s total

---

## Responsive Design

### Mobile-first approach

**Breakpoints:**
```
sm: 640px
md: 768px
lg: 1024px
```

**Estrategia:**
- Diseño base optimizado para 375px (iPhone X/11/12/13/14)
- Padding adaptativo: mobile `p-6`, desktop `px-8`
- Font sizes escalables: Base 16px, títulos con rem units
- Max-width containers: `max-w-md` (questions), `max-w-3xl` (results)

### Consideraciones

- **Touch targets**: Mínimo 44px × 44px (botones tienen 20px padding vertical + texto)
- **Scroll**: Hidden en todas las pantallas para experiencia app-like
- **Orientación**: Optimizado para portrait, funcional en landscape

---

## Iconografía

### Lucide React Icons

Icons usados en la app:

- `RotateCcw`: Botón de reinicio
- `Share2`: Botón de compartir
- `MessageCircle`: WhatsApp share
- `ExternalLink`: Links externos a Amazon

**Estilo de uso:**
```css
width: 20px (w-5)
height: 20px (h-5)
color: inherit from parent
```

---

## Estados interactivos

### Focus States

```css
outline: 4px solid var(--amarillo-sol);
outline-offset: 2px;
```

### Hover States

- **Buttons**: Scale + translate + overlay colorido
- **Cards**: Scale + rotate
- **Images**: Scale + rotate

### Active/Pressed States

- **Buttons**: Scale down + translate más pronunciado (simula depth)

---

## Tokens CSS

### CSS Variables definidas

**Colores:**
```css
--turquesa-retro: #14CEC7;
--rosa-shocking: #FF006E;
--amarillo-sol: #FFD60A;
--violeta-profundo: #9D4EDD;
--negro-tinta: #000814;
--beige-papel: #FDF0D5;
```

**Tipografía:**
```css
--font-display: 'Rubik', system-ui, -apple-system, sans-serif;
--font-body: 'Work Sans', system-ui, -apple-system, sans-serif;
```

**Efectos:**
```css
--text-shadow-strong: 4px 4px 0px var(--negro-tinta);
--text-shadow-medium: 3px 3px 0px var(--negro-tinta);
--text-shadow-light: 2px 2px 0px var(--negro-tinta);
--focus-ring: 4px solid var(--amarillo-sol);
```

**Font weights:**
```css
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

---

## Reglas de composición

### Lo que SÍ hacemos:

✅ Borders gruesos y sólidos (3-6px)  
✅ Sombras brutalistas sin blur  
✅ Rotaciones asimétricas sutiles  
✅ Colores vibrantes sin matices  
✅ Tipografía bold y directa  
✅ MAYÚSCULAS en CTAs y badges  
✅ Animaciones con propósito  
✅ Fondos transparentes en elementos flotantes  

### Lo que NO hacemos:

❌ Figuras geométricas decorativas de fondo  
❌ Gradientes  
❌ Sombras difusas (blur)  
❌ Elementos perfectamente alineados  
❌ Opacidades sutiles (solo rgba para overlays funcionales)  
❌ Bordes redondeados excesivos  
❌ Animaciones superfluas  
❌ Paletas extendidas (solo los 6 colores principales)  

---

## Voz y tono visual

**Personalidad del diseño:**

- **Agresivo pero accesible**: Colores fuertes, pero legibles
- **Caótico pero funcional**: Asimetría intencional, no accidental
- **Directo sin filtros**: Sin suavizados visuales
- **Humor visual**: Rotaciones, animaciones jugetonas
- **Memphis brutalista**: Lo mejor de ambos mundos

**El diseño debe comunicar:**

> "Soy intenso, honesto, y no me disculpo. Pero sé exactamente lo que hago."

---

## Ejemplos de código

### Button Component Example

```tsx
<motion.button
  whileHover={{ scale: 1.02, x: 3, y: 3 }}
  whileTap={{ scale: 0.98, x: 6, y: 6 }}
  onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
  onBlur={(e) => e.currentTarget.style.outline = "none"}
  className="w-full py-5 px-6 relative overflow-hidden group"
  style={{ 
    fontSize: "1.25rem",
    fontFamily: "var(--font-display)",
    fontWeight: "800",
    backgroundColor: "var(--rosa-shocking)",
    color: "#000814",
    border: "5px solid var(--negro-tinta)",
    transform: "rotate(-1deg)",
    boxShadow: "6px 6px 0px #000814"
  }}
>
  <span className="relative z-10">JUDGE ME</span>
  <motion.div
    className="absolute inset-0"
    style={{ backgroundColor: "var(--violeta-profundo)" }}
    initial={{ x: "-100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3 }}
  />
</motion.button>
```

### Badge Component Example

```tsx
<motion.span
  animate={{ rotate: [-3, 3, -3] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="inline-block px-4 py-2 text-xs rounded-full"
  style={{ 
    backgroundColor: "var(--violeta-profundo)",
    color: "var(--beige-papel)",
    fontFamily: "var(--font-display)",
    fontWeight: "700",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    border: "3px solid var(--negro-tinta)"
  }}
>
  Unhinged
</motion.span>
```

---

## Notas de implementación

### Tailwind v4

El proyecto usa Tailwind CSS v4 con custom tokens definidos en `/src/styles/theme.css`.

**Import alias:**
```typescript
import { Component } from "@/app/components/Component";
```

**Font imports:**
Solo en `/src/styles/fonts.css`, nunca en otros archivos CSS.

### Protected files

❌ NO modificar:
- `/src/app/components/figma/ImageWithFallback.tsx`

### Accesibilidad

- Focus rings en todos los elementos interactivos
- Contraste WCAG AA mínimo (4.5:1)
- Touch targets ≥ 44px
- Skip navigation patterns donde aplique
- Semantic HTML

---

## Recursos

**Tipografías:**
- [Rubik en Google Fonts](https://fonts.google.com/specimen/Rubik)
- [Work Sans en Google Fonts](https://fonts.google.com/specimen/Work+Sans)

**Inspiración:**
- Memphis Design Movement (1980s)
- Brutalismo Digital
- Neubrutalism UI
- 80s Pop Art

**Motion library:**
- [Motion (Framer Motion)](https://motion.dev/)

---

**Última actualización:** Enero 2026  
**Versión:** 1.0  
**Mantenedor:** Read Me Right! Design Team
