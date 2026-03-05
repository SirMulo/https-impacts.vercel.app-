import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ResearchFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filtrer</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filtrer etter tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Arbeidsmarkedets innvirkning</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Godkjenning av kompetanse</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Integreringspolitikk</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Filtrer etter år</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>2024</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>2023</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>2022</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
