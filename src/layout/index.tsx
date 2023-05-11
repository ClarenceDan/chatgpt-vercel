import Header from "~/components/Header"
import type { JSXElement } from "solid-js"

export default function ({ children }: { children: JSXElement }) {
  return (
    <div id="root" class="sm:pt-8em py-2em before">
      <Header />
      <script async src="https://umami.appbox.fun/script.js" data-website-id="4d2716ae-e1cc-405e-b894-85fd18da66fe"></script>
      {children}
    </div>
  )
}
