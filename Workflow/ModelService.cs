using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace PolarisBlazor.Workflow;

public sealed class ModelService {
  private readonly IJSRuntime _runtime;

  public ModelService(IJSRuntime runtime) => _runtime = runtime;
  
  public async Task SetValue(string key, object value) =>
    await _runtime.InvokeAsync<string>("setModelValue", key, value);

  public async Task<string> GetValue(string key) => 
    await _runtime.InvokeAsync<string>("getModelValue", key);
}