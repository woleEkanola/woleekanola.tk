{
classs: 'hide',
num: 0,
text: ['Christian', 'Web Developer', 'Husband', 'Graphic Artist', 'Nigerian', 'Father',' Printer', 'Business Man'],
useText: 'Web Developer',
portfolio:[{

        title: 'TBF Website',
        category: 'Website',
        img: 'https://www.graphberry.com/products/thumbnail/172/360.jpg',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        url: '',
        id: 1,
},
{
        title: 'TBF Event Design',
        category: 'Graphic Design ',
        img: 'https://www.graphberry.com/products/thumbnail/172/360.jpg',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        url: '',
        id: 12,
},
{
        title: 'Sehai Honey',
        category: 'Website ',
        img: 'https://www.graphberry.com/products/thumbnail/172/360.jpg',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        url: '',
        id: 123,
},
]
}

if(Portfolios.postTags.indexOf( this.state.search)>0){
  return Portfolio
}

var self = this;

categoryPortfolio =  self.props.portfolio.filter(function(Portfoli){
  return Portfoli.category.indexOf('Website') >= 0;
}).map(function(categoryPortfoli){
  return(
    <div key= {categoryPortfoli.id}>
    <img  src= {categoryPortfoli.img}  className= 'show'/>
    <img src= {require('../assets/img/zoom-in.png')} className= 'zoom' />
    <h1>{categoryPortfoli.title}</h1>
    <p>{ categoryPortfoli.text}</p>
      </div>
  )

})
<Timeline
  dataSource={{sourceType:"profile",screenName:"woleekanola"}}
  options={{username:"woleekanola", height:''}}
/>
