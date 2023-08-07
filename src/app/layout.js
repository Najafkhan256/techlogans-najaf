import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: 'Techlogans',
  description: 'Techlogans Officials',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
