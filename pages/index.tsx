import homeStyle from '../styles/Home.module.css';
import Login from './Login';
import cx from 'classnames';

export default function Home() {
    return (
        <div className={cx(homeStyle.main, 'container ')}>
            <div className={cx('text-center', 'title-box')}>
                <h1>사물함</h1>
                <h4>전하지 못한 진심을 상대에게 전달해보세요</h4>
            </div>

            <div className="row">
                <div style={{ background: 'skyblue' }}>
                    학창시절 사물함에 몰래 편지를 넣어본적 있나요? 해당 사이트는 학창시절의 사물함에 영감을 받아 유저의
                    전화번호와 이름을 기반으로 전하지 못한 진심을 전할 수 있습니다. x
                </div>
            </div>
        </div>
    );
}
