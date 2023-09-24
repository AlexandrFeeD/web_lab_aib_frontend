# HTTP HTTPS и их параметры 
***
## Лабораторная работа №1

### __[‍🎓 РГУПС](https://www.rgups.ru)__

Скрипт для получения информации о сайте:

`curl rgups.ru -I -k -L -v`
  
Использовал такие ключи как:

`-I` - Этот ключ указывает отправить только заголовки HTTP-ответа сервера, без тела ответа.  
`-L` - Этот ключ указывает следовать перенаправлениям при запросе, если сервер возвращает код (301 или 302).  
`-v` - Этот ключ делает подробный вывод информации о запросе.  
`-k` - Этот ключ отключает проверку SSL-сертификата.

Ответ: 

```shell
> HEAD / HTTP/1.1 - Эта строка запроса указывает на тип запроса (HEAD) и версию протокола (HTTP/1.1)
> Host: rgups.ru - Это Host, который указывает на имя сервера.
> User-Agent: curl/8.0.1 - Эта строка запроса указывает на устройсто с которого отправлен запрос
> Accept: */* - Строка указывающая на тип принимаемого контента 
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK - Это статус ответа сервера. Сообщает, что сервер успешно обработал запрос
< Server: nginx/1.19.1 - Строка указывает на серверное ПО и его версию
< Date: Sun, 24 Sep 2023 11:28:07 GMT - Строка содержить дату и время когда был получен ответ от сервера
< Content-Type: text/html; charset=utf-8 - Строка указывает на тип содержимого.
< Connection: keep-alive - Эта строка указывает, что соединение между клиентом и сервером должно быть поддерживаемым
< X-Powered-By: ProcessWire CMS - Строка содержит информацию о ПО, которое используется на сервере
< Set-Cookie: wire=dad04747595d7628efc80361ff14103a; path=/; HttpOnly; SameSite=Lax - Строка указывает на установку куки (cookie) на стороне клиента. 
Куки представляют собой данные, которые сервер отправляет браузеру, 
и они могут использоваться для отслеживания состояния сессии или других информационных целей.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - Строка указывает на дату и время истечения срока действия ответа.
Дата указана в прошлом, так как ответ не должен кэшироваться
< Cache-Control: no-store, no-cache, must-revalidate - Строка определяет инструкции для кэширования ответа.
В нашем случае указано, что ответ не должен сохраняться в кэше и должен быть проверен перед использованием
< Pragma: no-cache - Строка указывает, что ответ не должен кэшироваться и должен быть всегда запрашиваемым с сервера

```
### __[😼 Github](https://github.com/)__

Скрипт для получения информации о сайте:

`curl github.com -I -k -L -v`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Sun, 24 Sep 2023 13:43:11 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With -  Этот заголовок указывает на факторы, 
которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера. 
< content-language: en-US - Этот заголовок указывает на язык контента, который отправляется в ответе.
< ETag: W/"11d8e20b50ae7170bbb89d56498d2896" - Этот заголовок представляет собой метку, которая идентифицирует уникальную версию ресурса. 
Он используется для управления кэшированием на стороне клиента. 
Если ресурс изменяется, ETag изменяется, и клиент может использовать его для определения, нужно ли ему получить обновленную версию ресурса.
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload -  Этот заголовок относится к безопасности. 
Он указывает, что клиент должен поддерживать строгую защиту транспортного уровня (HTTPS) в течение 31536000 секунд и включать поддомены 
< X-Frame-Options: deny - Это мера безопасности, которая может помочь предотвратить атаки.
< X-Content-Type-Options: nosniff - Этот заголовок предотвращает браузер от интерпретации содержимого как чего-то, отличного от указанного в Content-Type.
< X-XSS-Protection: 0 - Этот заголовок указывает на то, что браузер не должен активировать механизм защиты от межсайтового скриптового выполнения (XSS)
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - Этот заголовок управляет тем, какой информацией о предыдущей странице делится браузер при переходе по ссылке.
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ и тд - содержит политики безопасности, которые браузер должен применять при загрузке и выполнении ресурсов на странице. Эти политики могут быть настроены для разрешения или запрета определенных действий, таких как загрузка ресурсов из определенных доменов или использование определенных типов контента.
< Set-Cookie: _octo=GH1.1.611602031.1695563001; Path=/; Domain=github.com; Expires=Tue, 24 Sep 2024 13:43:21 GMT; Secure; SameSite=Lax
< Accept-Ranges: bytes - Этот заголовок указывает, что сервер поддерживает диапазоны запросов для данного ресурса.
< X-GitHub-Request-Id: 986D:BBF3:15822DEF:15CF3EEE:65103CF9 - Этот заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера.
```

### __[🚝 РЖД](https://www.rzd.ru/)__

Скрипт для получения информации о сайте:

`curl rzd.ru -I -k -L -v --User-agent "Yandex"`

Для того, чтобы нас не заблокировал сервер, используем следующую часть строки:

`--User-agent "Yandex"` -  Это строка, которую клиент  отправляет на сервер, чтобы указать серверу, какое программное обеспечение или устройство отправляет запрос.  

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 206681 -  Этот заголовок указывает на длину (размер) содержимого ответа в байтах (210102 байта).
< Connection: keep-alive
< Date: Sun, 24 Sep 2023 13:49:06 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-p87lc - Этот заголовок связан с идентификацией серверного подключения.
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3 - Этот заголовок указывает на прокси-сервер, через который прошел запрос.
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=1787d9e142c1277eca059bb218991a24c3c084a8077d32c711facc9ba1d2606baf5b747a3931167d6d495e9aa4080052; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block - Этот заголовок говорит браузеру о включенной защите от XSS и указывает ему блокировать скрипты, 
которые могут представлять угрозу безопасности. 
```

### __[🕸 Яндекс](https://yandex.ru/)__

Скрипт для получения информации о сайте:

`curl yandex.ru -I -k -L -v`

Ответ: 

```shell
> HEAD /?yredirect=true HTTP/1.1 - Этот запрос будет направлен на сервер с указанием пути / и параметра запроса yredirect=true, и сервер должен ответить только заголовками ресурса, без передачи фактического содержимого.
> Host: dzen.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=BUjpUMDzIl3P+gFaVvU8pAv1ERNbyomj/Ut/OghdA0EJtRxTInnzniR6M+Y5J8Xe; domain=.dzen.ru; path=/; expires=Wed, 21 Sep 2033 13:51:43 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 287031478.227.1695563503315.40497 -  Этот заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера.
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1695563503288603-1540837716592383263700109-production-app-host-vlx-zen-295 - Заголовок представляет собой уникальный идентификатор запроса, который полезен для отслеживания запроса на стороне сервера Yandex или системы, которая обрабатывает запросы.
```

### __[🐍 Python](https://www.python.org/)__

Скрипт для получения информации о сайте:

`curl python.org -I -k -L -v`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50406
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Sun, 24 Sep 2023 13:55:58 GMT
< Age: 2819 - Этот заголовок указывает на время в секундах, прошедшее с момента кэширования ответа на сервере или прокси.
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230127-FRA - Этот заголовок указывает на серверы и прокси, которые обслуживали запрос.
< X-Cache: HIT, HIT - Этот заголовок указывает, что ответ был получен из кэша как минимум дважды.
< X-Cache-Hits: 192, 6 - Этот заголовок указывает на количество "попаданий" в кэш для данного запроса
< X-Timer: S1695563758.121360,VS0,VE0 - Этот заголовок содержит информацию о времени, затраченном на обработку запроса на сервере.
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### __[🌠 GIT](https://git-scm.com/)__

Скрипт для получения информации о сайте:

`curl git-scm.com -I -k -L -v`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sun, 24 Sep 2023 13:57:51 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - Этот заголовок указывает, что файлы не должны открываться автоматически после загрузки.
< X-Permitted-Cross-Domain-Policies: none - Этот заголовок указывает, что политики, связанные с кросс-доменными запросами, отсутствуют.
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
< X-Runtime: 0.015343 - Этот заголовок указывает на время, затраченное на выполнение запроса на стороне сервера
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 9275
< Server: cloudflare
< CF-RAY: 80bb89f50d993a83-DME - Этот заголовок может содержать информацию о запросе и обработке на стороне Cloudflare.
```

### __[🐵 Jetbrains](https://www.jetbrains.com/)__

Скрипт для получения информации о сайте:

`curl jetbrains.com -I -k -L -v`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47213
< Connection: keep-alive
< Date: Sun, 24 Sep 2023 14:00:30 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Sun, 24 Sep 2023 14:00:30 GMT - Этот заголовок указывает на дату и время истечения срока действия ответа в кэше.
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 6da67a85460a493ba4aab4d94239d022.cloudfront.net (CloudFront)
< Age: 14
< Set-Cookie: cf_country-region=RU-MOW; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL50-C1 - Этот заголовок содержит информацию о Point of Presence CloudFront, через который прошел запрос.
< X-Amz-Cf-Id: h3VkdK8eUw2n3CYwo0WmPTwxMKZ9t44NcXUH4dgkh37fKlJAtEENXg== - Этот заголовок может содержать идентификатор запроса и обработки на стороне CloudFront.
```

### __[💪 VSC](https://code.visualstudio.com/)__

Скрипт для получения информации о сайте:

`curl code.visualstudio.com -I -k -L -v`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sun, 24 Sep 2023 14:02:54 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 50213
< Connection: keep-alive
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' -  Этот заголовок определяет политику безопасности контента и разрешает встраивание ресурсов только с текущего домена.
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 20230924T140253Z-etavm1x9at0158897eqtrx6tbn000000019g000000002v8s
< X-Cache: CONFIG_NOCACHE
< Accept-Ranges: bytes
```

Если сайт работает на протоколе https и мы будем стучаться к нему через http://example.(ru, com и тд), то
мы будем получать ответ, в котором сервер сообщает нам что запрошенный ресурс был на постоянной основе перемещён в новое месторасположение.
Также сервер производит автоматический редирект с порта 80 на порт 443 после успешной аутентификации. 

Порт 80 обычно используется для незащищенного HTTP-соединения, в то время как порт 443 используется для защищенного HTTPS-соединения. "Clear auth" указывает на то, что перед перенаправлением происходит проверка подлинности пользователя. 

Таким образом, данное выражение описывает настройку сервера или приложения, которая обеспечивает безопасное соединение с использованием HTTPS после аутентификации пользователя.
```shell
< HTTP/1.1 301 Moved Permanently - Означает что он был на постоянной основе перемещен.
< Server: nginx/1.19.1
< Date: Sun, 24 Sep 2023 11:28:06 GMT
< Content-Type: text/html
< Content-Length: 169
< Connection: keep-alive
< Location: https://rgups.ru/
```
```shell
Connection #0 to host rgups.ru left intact - сервер оставил соединение открытым
* Clear auth, redirects to port from 80 to 443 - происходит автоматическое перенаправление (редирект) с порта 80 на порт 443 после успешной аутентификации. 
* Issue another request to this URL: 'https://rgups.ru/' - означает, что необходимо отправить еще один запрос по указанному URL-адресу.
*   Trying 80.72.224.90:443... - попытка соединения по IP
* Connected to rgups.ru (80.72.224.90) port 443 (#1) - соединено с сайтом ргупс по 443 порту
* schannel: disabled automatic use of client certificate - эта строчка означает, что функция автоматического использования клиентского сертификата в протоколе Schannel была отключена
* ALPN: offers http/1.1 - это расширение, определяющее какой протокол согласовывает зашифрованное соединение. В данном случае предложение перейти на HTTP версии 1.1
* ALPN: server accepted http/1.1 - сервер принял протокол HTTP версии 1.1
* using HTTP/1.1 - использование протокола HTTP версии 1.1
> HEAD / HTTP/1.1
> Host: rgups.ru
> User-Agent: curl/8.0.1
> Accept: */*
```
