import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/ui/Scroller';
import Button from '@enact/ui/Button';
import css from './Category.module.less'

const CategoryBase = kind({
	name: 'Category',

	styles: {
        css
    },

	render: function(props){ //eslint-disable-line no-unused-vars
		return (
			<Scroller>
			<div className ={css.category}>
                <div className = {css.color}>
                    <center>
                        <div className={css.boxh} style={{ backgroundImage: "url(" + `${ Background }` + ")" }}>
                        </div>
                        <div className={css.search}>
                            <HashRouter>
							    <Navigation />
						    </HashRouter>
					    </div>
					</center>
				</div>
				<div className={css.whatch}>
					<div className={css.postersetting}>
						<img className={css.poster} src="https://t1.daumcdn.net/movie/9ab1a372dd93ced3c357eabb8e01f3f5d6003267" alt="profile"/>
						<h6>The Boss Baby2</h6>
					</div>
					<div className={css.postersetting}>
						<img className={css.poster} src="https://t1.daumcdn.net/movie/f39274b0acd76f7c66f0a5fb9e5b7222ed37b373" alt="profile"/>
						<h6>Black Widow</h6>
					</div>
					<div className={css.postersetting}>
						<img className={css.poster} src="https://t1.daumcdn.net/movie/102f2c2b3655cba98202da97b167e94e70fa45f1" alt="profile"/>
                        <h6>Escape from Mogadisu</h6>
					</div>
					<div className={css.postersetting}>
						<img className={css.poster} src="https://t1.daumcdn.net/movie/88c733527983cbd6ab27e4f5f0673358ecfdf9eb" alt="profile"/>
						<h6>The Medium</h6>
					</div>
                </div>
			</div>
			</Scroller>
		);
	}
});

const Category = ThemeDecorator(CategoryBase);

export default Category;
export {Category,CategoryBase};