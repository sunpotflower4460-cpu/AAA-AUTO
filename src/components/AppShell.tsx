import type { PropsWithChildren } from 'react'

export const AppShell = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-[var(--color-washi)] px-[13px] py-[21px] text-[var(--color-sumi)] sm:px-[21px] sm:py-[34px]">
    <main className="relative mx-auto min-h-[calc(100svh-42px)] w-full max-w-[680px] overflow-hidden rounded-[16px] border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[0_2px_8px_var(--color-shadow),0_12px_32px_var(--color-shadow)]">
      {/* inner paper grain overlay — uses shared .paper-grain class from index.css */}
      <div className="paper-grain pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </main>
  </div>
)
