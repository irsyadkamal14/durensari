var url = "http://0.tcp.ap.ngrok.io:14977/news";
fetch(url).then(response => response.json())
    .then(function(data){
        var json = JSON.parse(JSON.stringify(data.data_news));
        console.log(json);
        
        var template = json.map(news => {
            return `                        
                <div class="col-lg-4 px-3">
                    <div class="tm-blog tm-scrollanim" >
                        <div class="tm-blog-topside">
                            <div class="tm-blog-thumb">
                                <img src="assets/images/blog/blog-image-3.jpg" alt="blog image">
                            </div>
                            <a href="#" class="tm-blog-metahighlight"><i class="ion-chatbubbles"></i> 3
                                Comments</a>
                        </div>
                        <div class="tm-blog-content">
                            <h6 class="tm-blog-title"><a href="blog-details.html">${news.news_title}</a></h6>
                            <ul class="tm-blog-meta">
                                <li><a href="#"><i class="ion-android-person"></i> Jennifer Muir</a></li>
                                <li><i class="ion-android-calendar"></i> March 06, 2019</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a convallis nisl,
                                at aliquam dolor. Morbi in iaculis nunc nulla velit imperdiet sollicitudin.</p>
                            <a href="#" class="tm-readmore">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById("news-container").innerHTML = template.join();
    }).catch(function(e){
        alert("gagal mengambil data");
    });