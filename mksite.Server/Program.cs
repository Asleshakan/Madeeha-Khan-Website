var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        builder =>
        {
            builder.WithOrigins("*")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
//app.UseStaticFiles();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(x =>
{
    x.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API V1");
    if (app.Environment.IsDevelopment())
        x.RoutePrefix = "swagger";
    else
        x.RoutePrefix = string.Empty;
}
);

app.UseHttpsRedirection();
app.UseCors("AllowClient");

app.UseAuthorization();

app.MapControllers();


app.MapFallbackToFile("/index.html");

app.Run();
