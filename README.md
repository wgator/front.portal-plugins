# Sku Selector

## Dependências

 - [jQuery](http://www.jquery.com)
 - [front.utils](https://github.com/vtex/front.utils)
 - [Liquid.js](https://github.com/gberger42/liquid.js)

## Uso

    $('.sku-selector-container').skuSelector(data, options);

## data

Deve ser um JSON de SKUs padrão da API

## options

Opcional, é um objeto que pode ter as seguintes propriedades

### selectOnOpening

default: `false`. Se `true`, na inicialização do plugin seleciona o primeiro SKU disponível (o primeiro que vier no array).

### warnUnavailable

default: `false`. Se `true`, mostra form de "avise-me" quando um SKU indisponível for selecionado

### showProductImage

default: `false`. Se `true`, mostra a imagem do produto.

### showProductTitle

default: `false`. Se `true`, mostra o nome do produto

### showPrice

default: `false`. Se `true`, mostra o preço.

### showPriceRange

default: `false`. Se `true`, mostra o preço mínimo e o máximo dentre os SKUs selecionáveis com as dimensões já selecionadas.


# Minicart

## Dependências

 - [jQuery](http://www.jquery.com)
 - [front.utils](https://github.com/vtex/front.utils)
 - [Liquid.js](https://github.com/gberger42/liquid.js)

## Uso

    $('.portal-minicart-ref').minicart(options);
    
## options

Opcional, é um objeto que pode ter as seguintes propriedades

### valuePrefix

default: `"R$ "`. Define o texto a ser exibido antes do valor.

### valueSufix

default: `""`. Define o texto a ser exibido depois do valor.

### availabilityMessages

Define as mensagens exibidas para cada código de disponibilidade da API. Default:

	availabilityMessages:
		"available": ""
		"unavailableItemFulfillment": "Este item não está disponível no momento."
		"withoutStock": "Este item não está disponível no momento."
		"cannotBeDelivered": "Este item não está disponível no momento."
		"withoutPrice": "Este item não está disponível no momento."
		"withoutPriceRnB": "Este item não está disponível no momento."
		"nullPrice": "Este item não está disponível no momento."

### showMinicart

default: `true`. Define se o minicart deve ser mostrado.

### showTotalizers

default: `true`. Define se o totalizers deve ser mostrado.