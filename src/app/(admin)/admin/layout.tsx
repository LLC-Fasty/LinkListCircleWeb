import Adminbox from "./components/adminbox"
import Navadmin from "./components/navadmin"
import Userid from "./components/userid"

export const metadata = {
  title: 'LLCircle Admin',
  description: 'A Blockchain Company.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navadmin/>
        <Adminbox>
        <Userid/>
        {children}
        </Adminbox>
      </body>
    </html>
  )
}
