import styled from "styled-components";

export const ResourceNavigationWrapper = styled.div`
.filter{
  margin-left: 8rem ;
  margin-right: 2rem ;
  position: sticky;
}
.filter-wrap {
    display: inline-block;
    float: left;
    flex-grow: 1;
    width: 22%;
    height: 800px; /* height needs to be increased with regarding to the total no. of patterns */
    p{
        margin-top: 1.5rem;
    }
  }
  h4{
    margin-bottom:1rem;
    border-bottom: 2px solid rgba(153, 151, 151, 0.2);
  }

label {
        display: block;
        padding-left: 15px;
        margin-top: 1px;
        vertical-align: bottom;
        text-indent: -15px; 
        }
input {
        width: 22px;
        height: 22px;
        padding: 0;
        margin: 0 1rem 1rem 0;
        display: inline;
        vertical-align: middle;
        position: relative;
        top: -1px;
      }
input[type="checkbox"] {
        margin: 0;
        }

        ul{
            display:flex;
            flex-direction:column;
            white-space: nowrap;
          }
        
          .ul{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            list-style: none;
          }
        
         
           .ul-open{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            padding-left:0;
            list-style: none;
            height:auto !important;
            opacity:1 !important;
            margin-bottom: 2rem;
            transition:all .4s !important;
           }
        
          .menu-icon{
            width: 1.5rem; 
            height: 1.5rem; 
            cursor: pointer;
            float: right;
            vertical-align: bottom;
          }

          .category{
            display: inline-block;
          }
            .toggle-btn{
                p{
                    display:inline;
                }
            }
         
            .ul{
             opacity:0;
             height:0;
             transition:none;
             visibility:hidden;
            }
         
            .ul-open{
             visibility:visible;
            }

  @media only screen and (max-width: 750px){
       position: initial;
       margin-left: 4rem;
       margin-right: 2rem;
       width: auto;
       .filter{
        display:contents;
       }
           
`;

export default ResourceNavigationWrapper;