import NavigationUtils from "@/core/common/utils/NavigationUtils";

const APIUtils = {
    createAPIHandler: (handlers) => {
        return async (req, res) => {
            APIUtils.parseQueryParams(req);
            const { method } = req;
            if (method in handlers) {
                await handlers[method](req, res);
            } else {
                res.setHeader('Allow', Object.keys(handlers));
                res.status(405).end(`Method ${method} Not Allowed`);
            }
        }
    },

    parseQueryParams: (req) => {
        req.query = NavigationUtils.convertCSVToArray(req.query)
    },
};

export default APIUtils;