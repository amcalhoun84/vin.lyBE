PseudoCode for Vin.ly

Back end:

backendWrapper = require/import (backEndWrapper)
authMW = require/import (authMiddleWare)
router = require/import (routerMW)
parser = require/import (Parser/JSON)
db = require/import Mongo (PostGRESQL is also okay, but not recommended in most instances)
	[ port = process.env.PORT || 3000] -- node.js mongoose is highly recommended

app = backEndWrapper()
app.listen(port)

(@app.)router.get('/', -res, req-):
	return res


print("Server listening on: " + port)






