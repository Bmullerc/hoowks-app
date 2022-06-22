import { LinkedinLogo, BehanceLogo, GithubLogo } from 'phosphor-react'

export function Contact() {
  return (
    <footer id='contact' className="text-center py-2 dark:bg-zinc-800 dark:text-zinc-50 text-zinc-700 bg-zinc-50 shadow-sm z-10 ">
      <div className="flex justify-center gap-2 items-center">
        <a href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/"><LinkedinLogo size={20} weight="duotone" className="hover:text-orange-500" /></a>
        <a href="https://www.behance.net/bernardo_muller"><BehanceLogo size={20} weight="duotone" className="hover:text-orange-500" /></a>
        <a href="https://github.com/Bmullerc"><GithubLogo size={20} weight="duotone" className="hover:text-orange-500" /></a>
      </div>
      <h5 className="text-xs font-medium mt-1 text-zinc-600 dark:text-zinc-300">Bernardo Müller ⋄ 2022</h5>
    </footer>
  )
}