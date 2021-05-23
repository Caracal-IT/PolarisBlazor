using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace PolarisBlazor.Workflow {
    public class Workflow {
        private IJSRuntime _runtime;

        public Workflow(IJSRuntime runtime) {
            _runtime = runtime;
        }
        
        public async Task GotoAsync(string nextActivity) {
            await _runtime.InvokeAsync<string>("goto", nextActivity);
        }
    }

    public class ModelService {
        private IJSRuntime _runtime;

        public ModelService(IJSRuntime runtime) {
            _runtime = runtime;
        }
        
        public async Task SetValue(string key, object value) {
            await _runtime.InvokeAsync<string>("setModelValue", key, value);
        }
        
        public async Task<string> GetValue(string key) {
            return await _runtime.InvokeAsync<string>("getModelValue", key);
        }
    }
}