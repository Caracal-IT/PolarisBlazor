using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace PolarisBlazor.Workflow {
    public sealed class Workflow {
        private readonly IJSRuntime _runtime;

        public Workflow(IJSRuntime runtime) => _runtime = runtime;
        
        public async Task GotoAsync(string nextActivity) =>
            await _runtime.InvokeAsync<string>("goto", nextActivity);
    }
}