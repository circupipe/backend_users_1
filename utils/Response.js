export const CreateResponse = (method, resource, data) => {
    let response;
    let errors = [];

    switch(method){
        case 'GET':
            if (data.length <= 0){
                errors = [ `No se puede mostrar el ${resource}` ];
            }

            response = {
                status: data.length <= 0 ? 'error' : 'ok',
                code: data.length <= 0 ? 404 : 200,
                data,
                errors
            };
            break;
        case 'POST':
            if(data == null){
                errors = [ `No se puede crear el ${resource}` ];
            }

            response = {
                status: data == null ? 'error' : 'ok',
                code: data == null ? 400 : 201,
                data,
                errors
            };
        case 'DELETE':
            
            if(data == null){
                errors = [ `No se pudo eliminar el ${resource}` ];
            }

            response = {
                status: data == null ? 'error' : 'ok',
                code: data == null ? 400 : 200,
                data,
                errors
            }
    }
    
    return response;
};