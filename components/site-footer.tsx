import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function SiteFooter() {
    return (
        <footer className="bg-primary text-primary-foreground rounded-t-3xl">
            <div className="container flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <h3 className="text-xl font-bold">Colaboradores</h3>
                        <Badge variant="secondary">1</Badge>
                    </div>
                    <Avatar>
                        <AvatarImage src="images/avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default SiteFooter
