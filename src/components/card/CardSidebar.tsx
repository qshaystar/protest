
import style from './cardSidebar.module.scss';
import { Button } from 'primereact/button';
        
export default function CardSidebar() {
    const detailBtns = [{
        label: "成員",
        icon: "pi-user",
    },{
        label: "優先權",
        icon: "pi-user",
    },{
        label: "待辦清單",
        icon: "pi-user",
    },{
        label: "標籤",
        icon: "pi-user",
    },{
        label: "日期",
        icon: "pi-user",
    },{
        label: "附件",
        icon: "pi-user",
    }];

    const actionBtns = [{
        label: "移動",
        icon: "pi-user",
    },{
        label: "複製",
        icon: "pi-user",
    },{
        label: "分享",
        icon: "pi-user",
    },{
        label: "番茄鐘",
        icon: "pi-user",
    }]


    return (
       <>
        <div className="pb-3">
            <div className={`${style.card_sidebar_title}`}>新增至卡片</div>
            {
                detailBtns.map(btn => (
                    <Button label={btn.label} icon={`pi ${btn.icon}`} 
                        key={btn.label}
                        className={`${style.card_sidebar_btn}`}
                    />
                ))
            }
        </div>
        <div>
            <div className={`${style.card_sidebar_title}`}>動作</div>
            {
                actionBtns.map(btn => (
                    <Button label={btn.label} icon={`pi ${btn.icon}`} 
                        key={btn.label}
                        className={`${style.card_sidebar_btn}`}
                    />
                ))
            }
        </div>
       </>
    )
}
