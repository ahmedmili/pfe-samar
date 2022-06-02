const mysql = require('mysql');
const urlM = require('url');



exports.getPartnersList = function (req,res){
 
    
 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "touney"
        });
    
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * from partners",[], function (err, result) {
                if (err) throw err;
                
 
                res.send(result); 



            })
        }) 

}

 

exports.getRegionsList = function (req,res){
 
    
 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "touney"
        });
    
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * from regions",[], function (err, result) {
                if (err) throw err;
                
 
                res.send(result); 



            })
        }) 

}




exports.addNewPartner = function(req,res){
    let body = [];
            let requestBody = {};

            req.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                try {
                    requestBody = JSON.parse(body);
                } catch (err) {

                }

                
               
                

             

                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "touney"
                    });

                con.connect(function(err) {
                    if (err) throw err;
                    

                            // insert 
                            var sql = "INSERT INTO `partners`( `name`, `logo_url`, `phone`, `email`, `website`, `maps`, `about`, `region_id`) VALUES  ?";
                            var values = [
                              [ 
                                    requestBody.name,
                                    requestBody.logo_url, 
                                    requestBody.phone,
                                    requestBody.email,
                                    requestBody.website, 
                                    requestBody.maps,
                                    requestBody.about,
                                    requestBody.region_id
                                    
                            
                                ]
                            ];
                            con.query(sql, [values], function (err, result) {
                              if (err) throw err;


                              res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.write(JSON.stringify({ code:200 , success:true,message:"Partnenaire ajoutée avec succès."}));
                                
                                res.end();  
                                


                            });
                            
                             
                        

                    });





                  });
                


                    
                   
                     
}



exports.deletePartner = function(req,res){
    
 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "touney"
        });
   

        const id = urlM.parse(req.url,true).query.id;


        con.connect(function(err) {
            if (err) throw err;
            con.query("DELETE FROM partners WHERE id= ?",[id], function (err, result) {
                if (err) throw err;
                 

                res.send({ success: true }); 



            })
        })

                    
}