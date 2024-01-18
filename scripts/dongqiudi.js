let body=$response.body;if(body){switch(!0)
{case/v2/article/detail/.test($request.url):try{let A=JSON.parse(body);A.data.infos&&A.data.infos.ad_content&&(A.data.infos.ad_content=A.data.infos.ad_content.filter(t=>"banner"!=t.ad_type)),body=JSON.stringify(A)}catch(C)
break;default:$done({})}$done({body})}else $done({});