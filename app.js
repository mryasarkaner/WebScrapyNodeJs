import axios from "axios"
import cheerio from "cheerio"
import express from "express"

const PORT = process.env.PORT || 5000
const app = express()

const URL = 'https://www.apkmirror.com/uploads/?devcategory=instagram'

axios(URL)
    .then(res => {
        const htmlData = res.data
        const $ = cheerio.load(htmlData)
        const articles = []


        $('.listWidget', htmlData).each((index, element) => {
            $(element).find('.appRow .table-row .table-cell div h5 a').each((i, el) => {
              const title = $(el).text();
              if (!title.toLowerCase().includes("beta") && !title.toLowerCase().includes("alpha")) {
                articles.push({
                  title
                });
              }
            });
          });
          console.log(articles);

/*
        $('.listWidget', htmlData).each((index, element) => {
            $(element).find('.appRow .table-row .table-cell div h5 a').each((i, el) => {
              const title = $(el).text();
              articles.push({
                title
              });
            });
          });
          console.log(articles);

/*
        $('.listWidget', htmlData).each((index, element) => {
            const title = $(element).children('div').children('.appRow').children('.table-row').children('.table-cell').children('div')
            .children('h5').children('a').text();


            articles.push({
                title
            })
        
        })
        console.log(articles) 

        /*    // check if title contains "beta" or "alpha"
            if (!title.toLowerCase().includes("beta") && !title.toLowerCase().includes("alpha")) {
                articles.push({
                    title
                })
            }
        })
        console.log(articles)   */

        

       /* $('.listWidget', htmlData).each((index, element) => {
            const title = $(element).children('div').children('.appRow').children('.table-row').children('.table-cell').children('div')
            .children('h5').text()
           
            articles.push({
                title
            })
        
        })
        console.log(articles) */




        /*console.log($('h5').filter(
            (i, element) => { return $(element).text().toLowerCase().includes($!=="beta")}
        ).text())*/
        
        
        /*var filteredArray = articles.filter(function(value) {
            return value !== "beta" && value !== "alpha";
          });
          
          console.log(filteredArray);   */

          

    }).catch(err => console.error(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))





