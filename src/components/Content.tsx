import React from 'react'
import {useResize} from '../hooks/useResize'


export default function Content() {

    console.log(useResize())

  return (
    <main className='content'>
        <aside className='content__left-side'>
            <h1 className='content__left-side__title'>Зарабатывайте<br />больше<br /><span className='title-gradient'>с WELBEX</span></h1>
            <p className='content__left-side__subtitle'>Развиваем и контролируем<br />продажи за вас</p>
        </aside>
        <aside className='content__right-side'>
            <h1 className='content__right-side-title'>Вместе с <span className='right-title-gradient'>БЕСПЛАТНОЙ<br />КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h1>
            <div className="content__right-side__dignities">
                {useResize().width>860
                ? (<>
                    <div className="content__right-side__dignity">
                    <h1>Виджеты</h1>
                    <h2>30 готовых решений</h2>
                </div>
                <div className="content__right-side__dignity">
                    <h1>Dashboard</h1>
                    <h2>с показателями вашего бизнеса</h2>
                </div>
                <div className="content__right-side__dignity">
                    <h1>Skype Аудит</h1>
                    <h2>отдела продаж и CRM системы</h2>
                </div>
                <div className="content__right-side__dignity">
                    <h1>35 дней</h1>
                    <h2>использования CRM</h2>
                </div>
                </>)
                :(<>
                    <div className="content__right-side__dignity">
                    <div className="dash"></div>
                    <h2>Skype аудит</h2>
                </div>
                <div className="content__right-side__dignity">
                    <div className="dash"></div>
                    <h2>30 виджетов</h2>
                </div>
                <div className="content__right-side__dignity">
                    <div className="dash"></div>
                    <h2>Dashboard</h2>
                </div>
                <div className="content__right-side__dignity">
                    <div className="dash"></div>
                    <h2>Месяц аmoCRM</h2>
                </div>
                </>)
                 }
                
            </div>
            <button className='content__right-side__button' type='button'>Получить консультацию</button>
        </aside>
    </main>
  )
}
