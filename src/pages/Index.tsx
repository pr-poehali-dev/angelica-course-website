import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { ApplicationForm } from "@/components/ApplicationForm";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const news = [
    {
      id: 1,
      title: "Новая программа обучения 2024",
      date: "15 ноября 2024",
      description: "Запускаем обновленный курс с практическими кейсами от успешных селлеров",
      tag: "Обучение"
    },
    {
      id: 2,
      title: "Вебинар: Секреты продаж на маркетплейсах",
      date: "20 ноября 2024",
      description: "Бесплатный вебинар для всех желающих. Регистрация уже открыта!",
      tag: "События"
    },
    {
      id: 3,
      title: "Успехи наших учеников",
      date: "25 ноября 2024",
      description: "Более 150 выпускников достигли оборота свыше 1 млн рублей в месяц",
      tag: "Результаты"
    }
  ];

  const promotions = [
    {
      id: 1,
      title: "Скидка 30% на курс",
      description: "Специальное предложение до конца декабря",
      discount: "-30%",
      color: "bg-purple-100"
    },
    {
      id: 2,
      title: "Бесплатная консультация",
      description: "Первая встреча с куратором в подарок",
      discount: "GIFT",
      color: "bg-orange-100"
    },
    {
      id: 3,
      title: "Групповой тариф",
      description: "Приведи друга и получи скидку 20%",
      discount: "-20%",
      color: "bg-blue-100"
    }
  ];

  const addresses = [
    {
      id: 1,
      city: "Москва",
      address: "ул. Тверская, д. 12, офис 304",
      phone: "+7 (495) 123-45-67",
      icon: "MapPin"
    },
    {
      id: 2,
      city: "Санкт-Петербург",
      address: "Невский проспект, д. 28, офис 201",
      phone: "+7 (812) 987-65-43",
      icon: "MapPin"
    },
    {
      id: 3,
      city: "Онлайн",
      address: "Доступ из любой точки мира",
      phone: "+7 (800) 555-35-35",
      icon: "Globe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-blue-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Курсы Анжелики
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#addresses" className="text-foreground hover:text-primary transition-colors">Адреса</a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors">Новости</a>
            <a href="#promotions" className="text-foreground hover:text-primary transition-colors">Акции</a>
          </div>
          <Button className="hover:scale-105 transition-transform">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in text-lg px-6 py-2">
            🎯 Продажи на Озон
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-foreground">
            Станьте успешным
            <br />
            <span className="text-primary">селлером на Ozon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in">
            Пройдите обучение у Анжелики Кардапольцевой и начните зарабатывать на маркетплейсах уже через месяц
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О курсе
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Анжелика Кардапольцева — эксперт по продажам на маркетплейсах с опытом более 5 лет. 
                За это время она помогла более 500 предпринимателям выйти на Ozon и построить прибыльный бизнес.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Практический подход</h3>
                    <p className="text-muted-foreground">Реальные кейсы и пошаговые инструкции</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Поддержка кураторов</h3>
                    <p className="text-muted-foreground">Ответы на вопросы 24/7 в закрытом чате</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Гарантия результата</h3>
                    <p className="text-muted-foreground">Первые продажи в течение 30 дней</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-400 to-orange-300 h-96 flex items-center justify-center">
                    <Icon name="GraduationCap" size={120} className="text-white opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="addresses" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Наши адреса
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {addresses.map((address, index) => (
              <Card 
                key={address.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={address.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{address.city}</h3>
                  <p className="text-muted-foreground mb-2">{address.address}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Icon name="Phone" size={18} />
                    {address.phone}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Новости
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4">{item.tag}</Badge>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Акции
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-12">
            Специальные предложения для вас
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {promotions.map((promo, index) => (
              <Card 
                key={promo.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in border-2 border-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`${promo.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-3xl font-bold text-primary">{promo.discount}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="text-muted-foreground mb-6">{promo.description}</p>
                  <Button className="w-full hover:scale-105 transition-transform">
                    Получить предложение
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <ApplicationForm />
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Курсы Анжелики</h3>
              <p className="text-sm opacity-80">
                Профессиональное обучение продажам на маркетплейсах
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100 transition-opacity">О нас</a></li>
                <li><a href="#addresses" className="hover:opacity-100 transition-opacity">Адреса</a></li>
                <li><a href="#news" className="hover:opacity-100 transition-opacity">Новости</a></li>
                <li><a href="#promotions" className="hover:opacity-100 transition-opacity">Акции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (800) 555-35-35</li>
                <li>info@angelika-courses.ru</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="cursor-pointer hover:scale-110 transition-transform" />
                <Icon name="Youtube" className="cursor-pointer hover:scale-110 transition-transform" />
                <Icon name="Send" className="cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 Курсы Анжелики Кардапольцевой. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;