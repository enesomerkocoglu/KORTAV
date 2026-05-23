<div align="center">

# KORTAV

### Her Şey Bir Tıkla Uzağında

[![Live Demo](https://img.shields.io/badge/%20Canlı%20Demo-KORTAV-C9A84C?style=for-the-badge)](https://enesomerkocoglu.github.io/KORTAV)
[![GitHub](https://img.shields.io/badge/Kaynak%20Kodu-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu/KORTAV)
[![Status](https://img.shields.io/badge/Durum-Yayında-success?style=for-the-badge)]()

<br/>

> Binlerce teknoloji ürünü, en iyi fiyatlar ve hızlı teslimat.
> Modern e-ticaret deneyimini sade ve şık bir arayüzle sunun.

</div>

---

## Ekran Görüntüleri

<img src="https://github.com/user-attachments/assets/19ee1003-0295-43ec-aa24-763fedf97157" width="100%" />
<img src="https://github.com/user-attachments/assets/281de70f-8383-4f26-aac0-f2f4361517a5" width="100%" />
<img src="https://github.com/user-attachments/assets/032007cd-732b-4523-b5a8-a0bbbeba4116" width="100%" />


---

## Projenin Çözdüğü Problem

Modern e-ticaret siteleri çoğu zaman karmaşık, yavaş ve görsel olarak bunaltıcıdır. **KORTAV**, premium bir alışveriş deneyimini sade ve hızlı bir arayüzde sunar. Koyu tema ve altın aksanlarla oluşturulan tasarım dili, kullanıcıyı bunaltmadan ürüne odaklamasını sağlar.

| Metrik | Değer | Anlam |
|---|---|---|
| Ürün Kategorisi | **3** | Telefon, Laptop, Aksesuar |
| Toplam Ürün | **8** | Özenle seçilmiş teknoloji ürünleri |
| Sayfa Sayısı | **2** | Ana Sayfa + Ürün Detay |
| Mobil Uyum | **✅** | Tüm ekran boyutlarında tam uyumlu |

---

## Kullanılan Teknolojiler

![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%20v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

---

## Teknik Mimari

**Neden Bu Stack?**

Karmaşık state yönetimi kütüphaneleri (Redux, Zustand) yerine React'ın yerleşik Context API tercih edildi. Stil için Tailwind veya CSS Modules yerine sade CSS kullanıldı. Bu kararlar, projeyi başlangıç seviyesi için anlaşılır ve sürdürülebilir kıldı.

```
KORTAV/
├── src/
│   ├── App.jsx           → Tüm bileşenler ve sayfalar
│   ├── CartContext.jsx   → Sepet state yönetimi (Context API)
│   ├── products.js       → Mock ürün verisi
│   ├── styles.css        → Tüm CSS (değişkenler + responsive)
│   ├── main.jsx          → Uygulama giriş noktası
│   └── gorsel/           → Ürün görselleri (WebP)
├── .github/
│   └── workflows/
│       └── deploy.yml    → GitHub Actions otomatik deploy
├── index.html            → Meta etiketler, font preconnect
└── vite.config.js        → Build optimizasyonu, code splitting
```

**Bileşen Yapısı**

```
App.jsx
├── Navbar          → Sticky navbar, arama, sepet ikonu
├── HeroSection     → LCP optimize hero görseli
├── CategoryFilter  → Anlık kategori filtreleme
├── ProductGrid     → 4'lü grid, hover animasyonları
├── ProductDetail   → Breadcrumb, specs, indirim badge
├── CartSidebar     → Overlay, ürün listesi, toplam
└── Footer          → Logo, navigasyon, iletişim
```

---

## Özellikler

- 🎨 **Premium Tasarım** — Koyu tema + altın aksanlar, araştırma bazlı renk paleti
- 🔍 **Anlık Arama** — Ürün adına göre gerçek zamanlı filtreleme
- 🛒 **Sepet Yönetimi** — Context API ile global state, sidebar overlay
- 📱 **Tam Responsive** — 4 breakpoint: 1280px, 1024px, 768px, 480px
- ⚡ **Performans Odaklı** — Code splitting, lazy loading, fetchpriority, WebP görseller
- ♿ **Erişilebilirlik** — aria-label, focus-visible, WCAG kontrast standartları
- 🚀 **Otomatik Deploy** — GitHub Actions ile her push'ta otomatik yayın

---

## Bu Projeden Öğrendiklerim

**Teknik Kazanımlar**
- **Tasarım sistemi kurmak:** 4 araştırma dokümanı (renk psikolojisi, UI bileşenleri, görsel tasarım temelleri, enterprise design systems) inceleyerek her kararı belgeledim. 8px grid sistemi, 60-30-10 renk kuralı ve WCAG kontrast standartlarını uygulamalı öğrendim.
- **React Context API:** Redux kullanmadan global sepet state'i yönetmek, ne zaman basit kalmanın daha iyi olduğunu gösterdi.
- **GitHub Actions & CI/CD:** Otomatik deploy pipeline kurma, `peaceiris/actions-gh-pages` ile `gh-pages` branch yönetimi ve HashRouter'ın GitHub Pages ile uyumunu keşfettim.
- **PageSpeed optimizasyonu:** LCP, FCP, render-blocking kaynaklar gibi kavramları gerçek bir proje üzerinde uyguladım. fetchpriority, preconnect ve code splitting tekniklerini öğrendim.

**Süreç Kazanımları**
- **Önce plan, sonra kod:** Tüm bileşenleri kodlamadan önce detaylı spec hazırlamak, geliştirme sürecini çok hızlandırdı.
- **Araştırma odaklı karar almak:** Her renk, spacing ve tipografi kararını bilimsel veriye dayandırmak, tutarlı bir tasarım dili oluşturdu.

---

## Performans & Kalite

**Google PageSpeed Insights — Mobil & Masaüstü**

| Metrik | Mobil | Masaüstü |
|---|---|---|
| Performans | ![82](https://img.shields.io/badge/82-success?style=flat-square) | ![99](https://img.shields.io/badge/99-success?style=flat-square) |
| Erişilebilirlik | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |
| En İyi Uygulamalar | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |
| SEO | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |

| Metrik | Durum | Notlar |
|---|---|---|
| Responsive | ✅ Tam Uyum | 4 breakpoint, mobil öncelikli |
| Semantic HTML | ✅ | main, nav, footer, section etiketleri |
| Erişilebilirlik | ✅ | aria-label, focus-visible, WCAG AA |
| Otomatik Deploy | ✅ | GitHub Actions ile CI/CD |
| Görsel Format | ✅ WebP | Tüm ürün görselleri WebP formatında |

---

## Tasarım Kararları

| Karar | Seçim | Gerekçe |
|---|---|---|
| Renk Paleti | Siyah + Altın | "Black Gold" — lüks, premium, güven |
| Font | Cormorant Garamond + Inter | Serif display + sans-serif body |
| Spacing | 8px grid sistemi | Tüm değerler 8'in katı |
| Border-radius | 4px | Veri yoğunluğu için keskin geometri |
| Transition | 150ms cubic-bezier | UI dokümanı standarı |
| State | Context API | Küçük proje için Redux overkill |

---

## Gelecek Planları

- [ ] Backend entegrasyonu (Firebase veya Supabase)
- [ ] Kullanıcı girişi ve kayıt sistemi
- [ ] Ödeme sistemi entegrasyonu (İyzico)
- [ ] Ürün yorum ve puanlama sistemi
- [ ] Admin paneli — ürün yönetimi
- [ ] Dark / Light tema toggle

---

## İletişim

<div align="center">

Proje hakkında soru sormak veya iş birliği yapmak ister misiniz?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enes-ömer-koçoğlu-08447937b)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu)

<br/>

---

<sub>© 2025 Enes Ömer Koçoğlu · KORTAV · Tüm hakları saklıdır.</sub>

</div>
