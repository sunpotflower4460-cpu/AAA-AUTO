import type { PropsWithChildren } from 'react'

export const AppShell = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-[var(--color-washi)] px-[13px] py-[21px] text-[var(--color-sumi)] sm:px-[21px]">
    <main className="mx-auto min-h-[calc(100svh-42px)] w-full max-w-[720px] rounded-[13px] border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[0_8px_21px_var(--color-shadow)]">
      {children}
    </main>
  </div>
)
