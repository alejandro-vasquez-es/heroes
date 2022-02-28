import { treeFilter } from "enzyme/build/RSTTraversal";
import { authReducer } from "../../auth/authReducer.js";
import { types } from "../../types/index.js";



describe('Test in authReducer', () => {  
  
    test('should return default state', () => {
        const state = authReducer({ logged: false },{});

        expect( state ).toEqual({logged: false})
    });

    test('should authenticate and set the user "name"', () => {

      const action = {
          type: types.login,
          payload: {
              name: 'Alejandro'
          }
      } 

      const state = authReducer({logged: false}, action);

      expect( state ).toEqual({
          logged: true,
          name: 'Alejandro'
      })


    });

    test('should remove the user name and the logged in false', () => {
      
        const action = {
            type: types.logout
        } 
  
        const state = authReducer({logged: true, name: 'Alejandro'}, action);
        expect( state ).toEqual({ logged: false })
      
    });
    
    
    
    
});
