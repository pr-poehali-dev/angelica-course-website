import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { ApplicationForm } from "@/components/ApplicationForm";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 13,
    minutes: 23,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const audience = [
    {
      id: 1,
      title: "НОВИЧКАМ",
      description: "Вы хотите начать бизнес на маркетплейсах с нуля, но не знаете с чего начать и боитесь сделать ошибки",
      image: "https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg"
    },
    {
      id: 2,
      title: "СПЕЦИАЛИСТАМ",
      description: "У вас есть опыт, но хочется увеличить доход и научиться продавать эффективнее на Озон",
      image: "https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg"
    },
    {
      id: 3,
      title: "ЭКСПЕРТАМ",
      description: "Вы уже работаете с маркетплейсами, но хотите освоить новые стратегии продаж и увеличить прибыль",
      image: "https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg"
    }
  ];

  const program = [
    {
      id: 1,
      title: "СОЦИАЛЬНЫЕ СЕТИ",
      description: "Обзорное знакомство. Какие социальные сети для продвижения бизнеса!",
      icon: "Share2"
    },
    {
      id: 2,
      title: "ТОП-7 ОШИБОК",
      description: "Разбираем основные ошибки новичков и специалистов в маркетинге. Как их избежать?",
      icon: "AlertCircle"
    },
    {
      id: 3,
      title: "ПРОБЛЕМА ПОКОЛЕНИЙ",
      description: "Почему важно вас понять поколение Х, Y, Z? Различия и психология целевой аудитории",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex justify-between items-start text-white mb-16">
            <div className="text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Calendar" size={16} />
                <span className="uppercase font-semibold">8 октября</span>
              </div>
              <div className="opacity-70">онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">20:00</div>
              <div className="opacity-70">старт</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-1">2 ЧАСА</div>
              <div className="opacity-70">длительность</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-left">
              <p className="text-sm mb-3 opacity-80">вебинар Анжелики Кардапольцевой</p>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                7 ОШИБОК<br />
                ПРИ ПРОДВИЖЕНИИ<br />
                В СОЦИАЛЬНЫХ СЕТЯХ
              </h1>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="mt-0.5 flex-shrink-0" />
                  <p>Узнаете главные ключи, что бы достичь для продвижения в блогах, в Интернете – не работают</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="mt-0.5 flex-shrink-0" />
                  <p>Поймёте как использовать соц сети для бизнеса</p>
                </div>
              </div>

              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 text-lg px-10 py-6 rounded-full font-semibold hover:scale-105 transition-transform mb-8">
                ЗАРЕГИСТРИРОВАТЬСЯ
              </Button>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-sm">
                <CardContent className="p-6">
                  <p className="text-xs mb-3">Регистрируйтесь на вебинар.<br />Бонус: уникальную структуру презентации на 2 минуты</p>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div>
                      <div className="text-3xl font-bold">{timeLeft.days}</div>
                      <div className="text-xs opacity-70 uppercase">дни</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{timeLeft.hours}</div>
                      <div className="text-xs opacity-70 uppercase">часы</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-xs opacity-70 uppercase">мин</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                      <div className="text-xs opacity-70 uppercase">секунд</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <img 
                  src="https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg" 
                  alt="Анжелика Кардапольцева"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase">
            КОМУ БУДЕТ ПОЛЕЗЕН
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">этот вебинар:</p>

          <div className="grid md:grid-cols-3 gap-8">
            {audience.map((item, index) => (
              <Card 
                key={item.id}
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <CardContent className="relative z-10 p-8 text-white min-h-[400px] flex flex-col justify-between">
                  <div>
                    <div className="text-6xl font-bold mb-6 opacity-50">{item.id}</div>
                    <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase">
            ПРОГРАММА ВЕБИНАРА
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {program.map((item, index) => (
              <div 
                key={item.id}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background mx-auto left-0 right-0">
                    <Icon name="Check" size={20} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">
                  АВТОР КУРСА
                </h2>
                <p className="mb-8 text-lg">• Анжелика Кардапольцева</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">900+</div>
                    <p className="text-sm opacity-90">Запущенных магазинов на OZON</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <p className="text-sm opacity-90">Обученных специалистов</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">120+</div>
                    <p className="text-sm opacity-90">Мастер-классов разработано на актуальные темы</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">100+</div>
                    <p className="text-sm opacity-90">Тысяч подписчиков в соцсетях</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-4">
                  <Icon name="Award" size={32} />
                  <div>
                    <div className="text-3xl font-bold">300+</div>
                    <p className="text-xs opacity-90">Выпускников обучения стали успех в 2024 году</p>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <img 
                  src="https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg" 
                  alt="Анжелика Кардапольцева"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase">
            РЕГИСТРИРУЙТЕСЬ НА ВЕБИНАР
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            и получите в подарок структуру презентации
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <ApplicationForm />
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="text-white text-center">
                    <div className="mb-6">
                      <Icon name="Gift" size={64} className="mx-auto opacity-80" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 uppercase">
                      УНИКАЛЬНАЯ<br />СТРУКТУРА<br />ПРЕЗЕНТАЦИИ
                    </h3>
                    <p className="text-sm opacity-90 mb-6">
                      Зарегистрируйтесь на вебинар и получите готовый шаблон презентации
                    </p>
                    <div className="relative mx-auto w-48 h-64 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <img 
                        src="https://cdn.poehali.dev/files/7b1100ebd66df5ca001558b4ae4aebf1.jpg" 
                        alt="Презентация"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Курсы Анжелики Кардапольцевой</h3>
            <p className="text-sm opacity-80">Профессиональное обучение продажам на маркетплейсах</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
            <Icon name="Youtube" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
            <Icon name="Send" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </div>
          <div className="text-sm opacity-80">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
