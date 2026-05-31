"use client";

import { usePathname } from "next/navigation";

function Block({ className }: { className: string }) {
  return (
    <div className={`rounded-2xl bg-white/8 animate-pulse ${className}`} />
  );
}

function HomeSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-0 py-6">
      <section className="space-y-6 pt-10 md:pt-16 lg:pt-20">
        <div className="mx-auto h-4 w-44 rounded-full bg-white/8 animate-pulse" />
        <div className="mx-auto space-y-4 text-center">
          <Block className="mx-auto h-16 w-[min(72vw,42rem)] sm:h-20 lg:h-24" />
          <Block className="mx-auto h-16 w-[min(82vw,56rem)] sm:h-20 lg:h-24" />
        </div>
        <div className="flex flex-col-reverse items-start justify-between gap-6 pt-20 min-[480px]:flex-row min-[480px]:items-center">
          <Block className="h-14 w-40 rounded-full" />
          <Block className="h-4 w-56 rounded-full" />
        </div>
      </section>

      <section className="border-y border-white/10 py-6 md:py-8">
        <Block className="h-5 w-full rounded-full" />
      </section>

      <section className="grid gap-8 md:grid-cols-2 md:gap-10">
        {Array.from({ length: 2 }).map((_, index) => (
          <article key={index} className="space-y-6">
            <Block className="aspect-square w-full rounded-xs" />
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <Block className="h-7 w-3/5 rounded-full" />
                <Block className="h-10 w-10 rounded-full" />
              </div>
              <Block className="h-4 w-2/5 rounded-full" />
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-14 border-t border-white/10 pt-12 pb-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <Block className="h-4 w-24 rounded-full" />
            <div className="space-y-3">
              <Block className="h-4 w-24 rounded-full" />
              <Block className="h-4 w-28 rounded-full" />
              <Block className="h-4 w-20 rounded-full" />
            </div>
          </div>
          <div className="space-y-4 sm:text-right">
            <Block className="ml-auto h-4 w-24 rounded-full" />
            <div className="space-y-3 sm:items-end">
              <Block className="ml-auto h-4 w-28 rounded-full" />
              <Block className="ml-auto h-4 w-24 rounded-full" />
              <Block className="ml-auto h-4 w-20 rounded-full" />
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-3">
          <Block className="h-5 w-72 rounded-full" />
          <Block className="h-4 w-56 rounded-full" />
        </div>
      </footer>
    </div>
  );
}

function ContactSkeleton() {
  return (
    <section className="page-container mt-8 border-t border-white/10 pt-24 lg:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-4">
          <Block className="mx-auto h-10 w-[min(80vw,36rem)] rounded-2xl" />
          <Block className="mx-auto h-10 w-[min(64vw,26rem)] rounded-2xl" />
        </div>
        <Block className="mx-auto mt-16 h-7 w-[min(88vw,34rem)] rounded-full" />
        <Block className="mx-auto mt-8 h-14 w-44 rounded-full" />

        <div className="mt-20 flex justify-center gap-12">
          <div className="space-y-4">
            <Block className="mx-auto h-14 w-14 rounded-full" />
            <Block className="h-4 w-24 rounded-full" />
          </div>
          <div className="space-y-4">
            <Block className="mx-auto h-14 w-14 rounded-full" />
            <Block className="h-4 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSkeleton() {
  return (
    <footer className="page-container mt-24 border-t border-white/10 pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-start sm:gap-16">
          <div className="space-y-4">
            <Block className="h-4 w-20 rounded-full" />
            <Block className="h-4 w-24 rounded-full" />
            <Block className="h-4 w-20 rounded-full" />
          </div>
          <div className="space-y-4 text-right sm:text-left">
            <Block className="h-4 w-24 rounded-full" />
            <Block className="h-4 w-24 rounded-full" />
            <Block className="h-4 w-20 rounded-full" />
          </div>
        </div>
        <div className="mt-10 space-y-3">
          <Block className="h-5 w-72 rounded-full" />
          <Block className="h-4 w-56 rounded-full" />
        </div>
      </div>
    </footer>
  );
}

function AboutSkeleton() {
  return (
    <div className="mx-auto flex w-full flex-col px-0 py-6 md:py-10 lg:py-16">
      <section className="page-container relative overflow-hidden -top-8 min-[420px]:top-0 py-32 md:pb-48 md:pt-32">
        <div className="relative z-10 space-y-0 text-center">
          <Block className="mx-auto h-6 w-28 rounded-full" />
          <div className="mx-auto mt-4 space-y-4 md:mt-8">
            <Block className="mx-auto h-16 w-[min(86vw,52rem)] rounded-2xl sm:h-20 lg:h-24" />
            <Block className="mx-auto h-16 w-[min(92vw,44rem)] rounded-2xl sm:h-20 lg:h-24" />
          </div>
        </div>
      </section>

      <section className="page-container mb-16 mt-4 lg:mb-16 lg:mt-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <article key={index} className="space-y-6">
              <Block className="aspect-9/11 w-full rounded-xs" />
              <div className="space-y-3 px-0 sm:px-4">
                <Block className="h-5 w-3/5 rounded-full" />
                <Block className="h-4 w-full rounded-full" />
                <Block className="h-4 w-11/12 rounded-full" />
                <Block className="h-4 w-9/12 rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactSkeleton />
      <FooterSkeleton />
    </div>
  );
}

function CreativeSkeleton() {
  return (
    <div className="mx-auto flex w-full flex-col px-0 py-6 md:py-10 lg:py-16">
      <section className="page-container relative overflow-hidden -top-8 min-[420px]:top-0 py-32 md:pb-48 md:pt-32">
        <div className="relative z-10 space-y-0 text-center">
          <Block className="mx-auto h-6 w-36 rounded-full" />
          <div className="mx-auto mt-4 space-y-4 md:mt-8">
            <Block className="mx-auto h-16 w-[min(86vw,52rem)] rounded-2xl sm:h-20 lg:h-24" />
            <Block className="mx-auto h-16 w-[min(82vw,40rem)] rounded-2xl sm:h-20 lg:h-24" />
          </div>
        </div>
      </section>

      <section className="page-container mt-16 scroll-mt-8 lg:mt-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {Array.from({ length: 2 }).map((_, index) => (
            <article key={index} className="space-y-6">
              <Block className="aspect-square w-full rounded-xs" />
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Block className="h-7 w-3/5 rounded-full" />
                  <Block className="h-10 w-10 rounded-full" />
                </div>
                <Block className="h-4 w-2/5 rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactSkeleton />
      <FooterSkeleton />
    </div>
  );
}

function CaseStudySkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-0 py-6 lg:pt-32">
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)_140px] lg:gap-10">
        <div className="fixed top-6 left-8 z-40 lg:sticky lg:top-16 lg:self-start lg:pt-2 lg:z-20 lg:left-auto lg:right-auto">
          <Block className="h-14 w-28 rounded-full" />
        </div>

        <div className="space-y-10">
          <section className="space-y-4">
            <Block className="h-4 w-28 rounded-full" />
            <Block className="h-16 w-[min(88vw,48rem)] rounded-2xl sm:h-20 lg:h-24" />
            <Block className="h-16 w-[min(92vw,44rem)] rounded-2xl sm:h-20 lg:h-24" />
          </section>

          <section className="py-8 sm:pt-12 sm:pb-4">
            <Block className="aspect-video w-full rounded-2xl sm:rounded-3xl" />
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <Block className="h-4 w-28 rounded-full" />
                <Block className="h-4 w-3/4 rounded-full" />
                <Block className="h-4 w-2/3 rounded-full" />
                <Block className="h-24 w-full rounded-3xl" />
              </div>
            ))}
          </section>

          <section className="space-y-8">
            <div className="space-y-4">
              <Block className="h-4 w-24 rounded-full" />
              <Block className="h-8 w-3/5 rounded-2xl" />
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
              <Block className="h-4 w-32 rounded-full" />
              <div className="space-y-3">
                <Block className="h-4 w-full rounded-full" />
                <Block className="h-4 w-11/12 rounded-full" />
                <Block className="h-4 w-10/12 rounded-full" />
              </div>
            </div>
            <Block className="aspect-video w-full rounded-3xl" />
          </section>

          <section className="space-y-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4 lg:pt-2">
                  <Block className="h-4 w-24 rounded-full" />
                  <Block className="h-7 w-4/5 rounded-2xl" />
                  <Block className="h-4 w-full rounded-full" />
                  <Block className="h-4 w-11/12 rounded-full" />
                </div>
                <Block className="min-h-72 rounded-3xl sm:min-h-96 lg:min-h-128" />
              </div>
            ))}
          </section>

          <section className="mt-6 w-full sm:mt-8 space-y-4">
            <Block className="h-4 w-36 rounded-full" />
            <Block className="aspect-video w-full rounded-3xl" />
          </section>
        </div>
      </section>
    </div>
  );
}

export function PageLoading() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <HomeSkeleton />;
  }

  if (pathname === "/about") {
    return <AboutSkeleton />;
  }

  if (pathname === "/creative") {
    return <CreativeSkeleton />;
  }

  if (pathname.startsWith("/work/") || pathname.startsWith("/creative/")) {
    return <CaseStudySkeleton />;
  }

  return <AboutSkeleton />;
}
