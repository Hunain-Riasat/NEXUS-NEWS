import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';



export default class News extends Component {
    static defaultProps = {
      country: "us",
      pageSize: 5,
      category: 'general',
  };
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  };
  
  constructor(){
    super();
    console.log("i am a constructor in news.js");
    this.state={
      articles:[],
      loading:false,
      page:1,
    }
  }  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c1374a2f0824b65ac36cb945d3c3404&page=1&pageSize=${this.props.pageSize}`;
    // let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1c1374a2f0824b65ac36cb945d3c3404";
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({ articles:parsedData.articles,
      totalresults:parsedData.totalResults,
      loading:false,
    })
    console.log(parsedData);
  }
  handlePrevBtn= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c1374a2f0824b65ac36cb945d3c3404&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json();

    this.setState({
      page :this.state.page-1,
      articles:parsedData.articles,
      loading:false,
    })
  }
  handleNextBtn=async ()=>{
    if(!(this.state.page+1 >Math.ceil(this.state.totalresults/this.props.pageSize))){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c1374a2f0824b65ac36cb945d3c3404&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data= await fetch(url);
      let parsedData= await data.json();
        this.setState({
          page :this.state.page+1,
          articles:parsedData.articles,
          loading:false,
          })
     }

  }
  render() {
    return (
      <div className='container my-3'>
       <h1 className="text-center" style={{margin:'30px'}}> NeXus Headlines</h1>
       {this.state.loading && <Spinner/>} 
        <div className="row">
        {!(this.state.loading) &&  this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
             <Newsitem  title={element.title} description={element.description}  imageurl={element.urlToImage} urlnews={element.url} author={element.author} publishedAt={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Previous</button>
        <span style={{ color: "#212529", fontWeight: "bold" }}>Made with ❤️ by Hunain Riasat</span>

        <button disabled={this.state.page+1 >Math.ceil(this.state.totalresults/this.props.pageSize) }type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
      </div>
    
       
    )
  }
}
