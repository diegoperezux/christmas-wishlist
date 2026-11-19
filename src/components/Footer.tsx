interface FooterProps {
  ownerName: string
}

export default function Footer({ ownerName }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-500">
      <p>
        Lista de regalos de {ownerName} · Hecha con cariño para esta Navidad 🎄
      </p>
    </footer>
  )
}
