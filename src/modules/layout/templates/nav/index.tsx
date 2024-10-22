// full_web-storefront/src/modules/layout/templates/nav/index.tsx

import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
// Importa i nuovi link o componenti se necessario
// import SideMenu from "@modules/layout/components/side-menu" // Commentato per nascondere il pulsante del menu
// Importa il CSS di Swiper direttamente nel tuo componente o nel file globale
import 'swiper/css';
import 'swiper/css/navigation'; // Se utilizzi la navigazione

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          
          {/* Sinistra: Logo */}
          <div className="flex-1 basis-0 h-full flex items-center">
            {/* <div className="h-full">
              <SideMenu regions={regions} />
            </div> */}
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-2 hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src="https://fullpartystorage.s3.amazonaws.com/logo_s.svg" // Percorso corretto al logo
                alt="Full Party Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="txt-compact-xlarge-plus text-ui-fg-subtle">
                Full Party
              </span>
            </LocalizedClientLink>
          </div>

          {/* Centro: Menu Links */}
          <div className="hidden md:flex items-center gap-x-6 h-full">
            {/* Link ai Tag dei Prodotti */}
            <LocalizedClientLink
              href="/tags/carnevale"
              className="hover:text-ui-fg-base"
              data-testid="nav-carnevale-link"
            >
              Carnevale
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/tags/halloween"
              className="hover:text-ui-fg-base"
              data-testid="nav-halloween-link"
            >
              Halloween
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/tags/natale"
              className="hover:text-ui-fg-base"
              data-testid="nav-natale-link"
            >
              Natale
            </LocalizedClientLink>
            
            {/* Link alle Collezioni */}
            <LocalizedClientLink
              href="/collections/accessorio"
              className="hover:text-ui-fg-base"
              data-testid="nav-accessorio-link"
            >
              Accessori
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/decorazione"
              className="hover:text-ui-fg-base"
              data-testid="nav-decorazione-link"
            >
              Decorazioni
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/costume"
              className="hover:text-ui-fg-base"
              data-testid="nav-costume-link"
            >
              Costumi
            </LocalizedClientLink>
          </div>

          {/* Destra: Carrello e Account */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
