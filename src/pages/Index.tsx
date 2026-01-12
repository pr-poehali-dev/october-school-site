import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDay, setActiveDay] = useState('monday');

  const schedule = {
    monday: [
      { time: '08:30-09:15', subject: 'Математика', teacher: 'Иванова М.П.', class: '5А' },
      { time: '09:25-10:10', subject: 'Русский язык', teacher: 'Петрова А.С.', class: '5А' },
      { time: '10:20-11:05', subject: 'Литература', teacher: 'Петрова А.С.', class: '5А' },
      { time: '11:25-12:10', subject: 'История', teacher: 'Сидоров И.В.', class: '5А' },
      { time: '12:20-13:05', subject: 'Физкультура', teacher: 'Кузнецов Д.А.', class: '5А' },
    ],
    tuesday: [
      { time: '08:30-09:15', subject: 'Английский язык', teacher: 'Смирнова Е.Л.', class: '5А' },
      { time: '09:25-10:10', subject: 'Математика', teacher: 'Иванова М.П.', class: '5А' },
      { time: '10:20-11:05', subject: 'Биология', teacher: 'Морозова Н.К.', class: '5А' },
      { time: '11:25-12:10', subject: 'География', teacher: 'Волков С.П.', class: '5А' },
    ],
  };

  const teachers = [
    {
      name: 'Иванова Мария Петровна',
      subject: 'Математика',
      experience: '15 лет',
      education: 'МГУ им. М.В. Ломоносова',
      icon: 'Calculator',
    },
    {
      name: 'Петрова Анна Сергеевна',
      subject: 'Русский язык и литература',
      experience: '12 лет',
      education: 'МПГУ',
      icon: 'BookOpen',
    },
    {
      name: 'Сидоров Иван Викторович',
      subject: 'История и обществознание',
      experience: '20 лет',
      education: 'РГГУ',
      icon: 'Globe',
    },
    {
      name: 'Смирнова Елена Львовна',
      subject: 'Английский язык',
      experience: '10 лет',
      education: 'МГЛУ',
      icon: 'Languages',
    },
    {
      name: 'Кузнецов Дмитрий Александрович',
      subject: 'Физическая культура',
      experience: '8 лет',
      education: 'РГУФК',
      icon: 'Dumbbell',
    },
    {
      name: 'Морозова Наталья Константиновна',
      subject: 'Биология',
      experience: '14 лет',
      education: 'МГУ им. М.В. Ломоносова',
      icon: 'Leaf',
    },
  ];

  const parentsInfo = [
    {
      title: 'Приём документов',
      content: 'Документы принимаются с понедельника по пятницу с 9:00 до 17:00. Необходимые документы: свидетельство о рождении, паспорт родителя, медицинская карта.',
    },
    {
      title: 'Питание',
      content: 'В школе организовано двухразовое горячее питание. Завтрак - 09:15, обед - 12:10. Стоимость питания: 150 руб/день.',
    },
    {
      title: 'Режим работы',
      content: 'Школа работает в одну смену. Начало занятий - 08:30. Уроки по 45 минут. Продолжительность перемен: 10-20 минут.',
    },
    {
      title: 'Электронный дневник',
      content: 'Доступ к электронному дневнику предоставляется через портал Госуслуги. Инструкции по подключению можно получить у классного руководителя.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-background">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full p-3">
                <Icon name="GraduationCap" className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Октябрьская народная школа №1</h1>
                <p className="text-sm text-muted-foreground">Образование с 1950 года</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#main" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors font-medium">
                Расписание
              </a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors font-medium">
                Учителя
              </a>
              <a href="#parents" className="text-foreground hover:text-primary transition-colors font-medium">
                Родителям
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section id="main" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Добро пожаловать в нашу школу!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём комфортную образовательную среду для развития каждого ребёнка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle>56 учеников</CardTitle>
                <CardDescription>Обучение по совмещенному классу</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-secondary" size={32} />
                </div>
                <CardTitle>Онлайн обучение</CardTitle>
                <CardDescription>Дистанционный формат образования</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-primary" size={32} />
                </div>
                <CardTitle>100+ наград</CardTitle>
                <CardDescription>Победы в олимпиадах и конкурсах всех уровней</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="User" size={18} className="text-muted-foreground" />
                  Директор: Пахомов Егор Сергеевич
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Globe" size={18} className="text-muted-foreground" />
                  Народная школа (без физического адреса)
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-muted-foreground" />
                  +7 953 325-95-22
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-muted-foreground" />
                  egorkardasin6@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Понедельник - Пятница: 08:00 - 18:00</p>
                <p>Суббота: 09:00 - 15:00</p>
                <p>Воскресенье: выходной</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Расписание уроков</h2>
            <p className="text-muted-foreground">Расписание для 5А класса</p>
          </div>

          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
              <TabsTrigger value="monday" onClick={() => setActiveDay('monday')}>
                Пн
              </TabsTrigger>
              <TabsTrigger value="tuesday" onClick={() => setActiveDay('tuesday')}>
                Вт
              </TabsTrigger>
              <TabsTrigger value="wednesday">Ср</TabsTrigger>
              <TabsTrigger value="thursday">Чт</TabsTrigger>
              <TabsTrigger value="friday">Пт</TabsTrigger>
            </TabsList>

            <TabsContent value="monday" className="space-y-4">
              {schedule.monday.map((lesson, idx) => (
                <Card key={idx} className="animate-fade-in">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        {lesson.time}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-lg">{lesson.subject}</h3>
                        <p className="text-sm text-muted-foreground">{lesson.teacher}</p>
                      </div>
                    </div>
                    <Badge className="bg-primary">{lesson.class}</Badge>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="tuesday" className="space-y-4">
              {schedule.tuesday.map((lesson, idx) => (
                <Card key={idx} className="animate-fade-in">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        {lesson.time}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-lg">{lesson.subject}</h3>
                        <p className="text-sm text-muted-foreground">{lesson.teacher}</p>
                      </div>
                    </div>
                    <Badge className="bg-primary">{lesson.class}</Badge>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="wednesday" className="text-center py-8">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Расписание на среду будет добавлено</p>
            </TabsContent>

            <TabsContent value="thursday" className="text-center py-8">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Расписание на четверг будет добавлено</p>
            </TabsContent>

            <TabsContent value="friday" className="text-center py-8">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Расписание на пятницу будет добавлено</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="teachers" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Онлайн обучение</h2>
            <p className="text-muted-foreground">Дистанционный формат без постоянных преподавателей</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Monitor" className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Школа работает в онлайн формате</h3>
              <p className="text-muted-foreground text-lg">
                Обучение проходит дистанционно с использованием современных образовательных платформ и материалов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="parents" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Родителям</h2>
            <p className="text-muted-foreground">Важная информация для родителей и законных представителей</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {parentsInfo.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-accent/10">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <span className="flex items-center gap-3">
                    <Icon name="Info" className="text-primary" size={20} />
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-8 bg-gradient-to-br from-primary to-secondary text-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="MessageCircle" size={32} className="flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Есть вопросы?</h3>
                  <p className="mb-4 opacity-90">
                    Свяжитесь с администрацией школы по телефону или электронной почте
                  </p>
                  <Button variant="secondary" size="lg">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="GraduationCap" size={24} />
            <span className="font-bold text-lg">Октябрьская народная школа №1</span>
          </div>
          <p className="text-sm opacity-80 mb-2">© 2024 Все права защищены</p>
          <p className="text-xs opacity-60">г. Москва, ул. Октябрьская, д. 15 • +7 (495) 123-45-67</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;