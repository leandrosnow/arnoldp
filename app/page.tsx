import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container flex flex-col gap-8 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <div>
          <p className="text-sm font-bold">NO PAIN, NO SENSE</p>
          <h1 className="text-5xl font-black italic leading-tight tracking-tighter md:text-6xl flex align-top gap-2">
            HAPTHOS <span className="text-sm font-light">*</span><br className="hidden sm:inline" />
          </h1>
        </div>
        <p className="text-md">
          Peça de vestuário inteligente que usa feedback háptico para orientar a postura e melhorar a técnica durante o treino.
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2"><Icons.activity className="h-5 w-5" />Otimização postural em tempo real</li>
          <li className="flex items-center gap-2"><Icons.brain className="h-5 w-5" />Aumento da consciência corporal</li>
          <li className="flex items-center gap-2"><Icons.shield className="h-5 w-5" />Prevenção ativa de lesões</li>
        </ul>
        <p className="text-muted-foreground text-xs">*nome provisório, ainda sob avaliação</p>
      </div>
      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
      <div className="flex flex-col gap-4" id="tecnologia">
        <h2 className="text-2xl text-center font-extrabold italic leading-tight tracking-tighter md:text-6xl">
          TECNOLOGIA
        </h2>
        <div className="bg-secondary rounded-3xl flex flex-col items-start p-6 gap-4">
          <h3 className="text-xl font-bold">Propósito</h3>
          <p className="text-muted-foreground">Este projeto investiga de que forma o Design de Interação pode apoiar a correção de postura em contexto de musculação, através de uma peça de vestuário com feedback háptico.</p>
          <div className="h-px w-full bg-gradient-to-r from-[hsl(78,69%,50%)] to-transparent"></div>
          <p className="text-lg font-bold">Em vez de depender exclusivamente de espelhos, vídeos ou da presença constante de um treinador, a peça fornece um canal de comunicação direto com o corpo do utilizador, orientando pequenas correções ao longo do movimento.</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.vibration className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Vibração</h3>
              <p className="text-muted-foreground">que corrige postura e amplitude de movimento.</p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.bluetooth className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Conexão</h3>
              <p className="text-muted-foreground">com uma app de treino, para reconhecimento do exercício.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4" id="inputs">
        <h2 className="text-2xl text-center font-extrabold italic leading-tight tracking-tighter md:text-6xl">
          INPUTS
        </h2>
        <div className="bg-secondary rounded-3xl flex flex-col items-start p-6 gap-4">
          <h3 className="text-xl font-bold">Erros Posturais</h3>
          <p className="text-muted-foreground">A peça de vestuário integra sensores que monitorizam a postura do utilizador durante exercícios de musculação.</p>
          <div className="h-px w-full bg-gradient-to-r from-[hsl(78,69%,50%)] to-transparent"></div>
          <p className="text-lg font-bold">Estes dados são recolhidos em tempo real e comparados com parâmetros de postura considerados adequados para cada tipo de exercício.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4" id="outputs">
        <h2 className="text-2xl text-center font-extrabold italic leading-tight tracking-tighter md:text-6xl">
          OUTPUTS
        </h2>
        <div className="bg-secondary rounded-3xl flex flex-col items-start p-6 gap-4">
          <h3 className="text-xl font-bold">Feedback Háptico</h3>
          <p className="text-muted-foreground">Quando é detetado um desvio relevante em relação à postura desejada, a peça responde com feedback háptico.</p>
          <div className="h-px w-full bg-gradient-to-r from-[hsl(78,69%,50%)] to-transparent"></div>
          <p className="text-lg font-bold">O resultado é um canal de comunicação imediato, discreto e não verbal: o utilizador não precisa de olhar para um ecrã ou ouvir instruções para perceber que algo precisa de ser ajustado.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4" id="interacoes">
        <h2 className="text-2xl text-center font-extrabold italic leading-tight tracking-tighter md:text-6xl">
          INTERAÇÕES
        </h2>
        <div className="bg-secondary rounded-3xl flex flex-col items-start p-6 gap-4">
          <h3 className="text-xl font-bold">Aprender Sentindo</h3>
          <p className="text-muted-foreground">A interação entre utilizador e peça de vestuário acontece num ciclo contínuo.</p>
          <div className="h-px w-full bg-gradient-to-r from-[hsl(78,69%,50%)] to-transparent"></div>
          <p className="text-lg font-bold">Com o tempo, o utilizador começa a antecipar correções, desenvolvendo maior consciência corporal e autonomia na execução dos exercícios.</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.smartphone className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Seleção</h3>
              <p className="text-muted-foreground">O utilizador seleciona na app o exercício a realizar, que é reconhecido pela peça.</p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.posture className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Preparação</h3>
              <p className="text-muted-foreground">O utilizador ajusta a posição do corpo, sentindo a redução do feedback.</p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.muscle className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Execução</h3>
              <p className="text-muted-foreground">O utilizador executa o exercício, seguindo a direcionalidade do feedback.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-center font-extrabold italic leading-tight tracking-tighter md:text-6xl">
          VALOR DA PROPOSTA
        </h2>
        <div className="bg-secondary rounded-3xl flex flex-col items-start p-6 gap-4">
          <h3 className="text-xl font-bold">Melhor Postura, Melhor Treino</h3>
          <p className="text-muted-foreground">A peça de vestuário propõe-se a acrescentar valor em diferentes dimensões.</p>
          <div className="h-px w-full bg-gradient-to-r from-[hsl(78,69%,50%)] to-transparent"></div>
          <p className="text-lg font-bold">Através de feedback háptico, o projeto procura criar uma experiência de treino mais consciente e mais eficiente.</p>
          <div>
            <h4 className="font-bold">20,08%</h4>
            <p className="text-muted-foreground">Taxa de abandono dos treinos, por conta de lesões</p>
          </div>
          <div>
            <h4 className="font-bold">15,06%</h4>
            <p className="text-muted-foreground">Taxa de abandono dos treinos, por falta de acompanhamento</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.bones className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Segurança</h3>
              <p className="text-muted-foreground">Redução do risco de lesões associadas a má postura ou movimentos incorretos.</p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.learn className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Aprendizagem</h3>
              <p className="text-muted-foreground">Transformação do treino num processo de aprendizagem contínua.</p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-3xl flex flex-col items-start p-6 gap-2">
            <Icons.user className="h-8 w-8" />
            <div className="gap-2">
              <h3 className="text-xl font-bold">Autonomia</h3>
              <p className="text-muted-foreground">Orientação durante o treino, perante a ausência de um instrutor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
