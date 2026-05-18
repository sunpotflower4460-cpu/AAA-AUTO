import type { PropsWithChildren } from 'react'

export const AppShell = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-[var(--color-washi)] px-[13px] py-[21px] text-[var(--color-sumi)] sm:px-[21px] sm:py-[34px]">
    <main className="relative mx-auto min-h-[calc(100svh-42px)] w-full max-w-[680px] overflow-hidden rounded-[16px] border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[0_2px_8px_var(--color-shadow),0_12px_32px_var(--color-shadow)]">
      {/* inner paper grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </main>
  </div>
)
