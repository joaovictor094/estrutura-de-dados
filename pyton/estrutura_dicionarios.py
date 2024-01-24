##dicionarios sao chamados de associaçoes composta

#chave e valor - utilizado por json - APIS REST

estados_siglas ={
    'SC':"santa catarina",
    "PR":"Parana",
    "RS":'rio grande do sul',
    "SP":"Sao paulo"
}

print(estados_siglas['SC'])

for d in estados_siglas.items():
    print(d)


nome ='joao'

for v1 in nome:
    print(v1)