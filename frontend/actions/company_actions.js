import * as CompanyAPIUtil from '../util/company/company_api_util'; 

export const requestIBM = () => {
    return dispatch => {
        return CompanyAPIUtil.ibm()
    }
}